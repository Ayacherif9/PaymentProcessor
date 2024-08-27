<?php
// Activer les rapports d'erreurs
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Informations de connexion à la base de données
$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "cricpayz"; 

// Créer la connexion à la base de données
$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}

// Vérifier si la requête est bien en POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $username = $_POST['username'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    $password2 = $_POST['password2'] ?? '';

    // Validation des mots de passe
    if ($password !== $password2) {
        die("Les mots de passe ne correspondent pas.");
    }

    // Hacher le mot de passe
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Préparer la requête SQL
    $stmt = $conn->prepare("INSERT INTO user (username, email, password) VALUES (?, ?, ?)");

    // Vérifier si la requête a bien été préparée
    if ($stmt === false) {
        die("Erreur lors de la préparation de la requête : " . $conn->error);
    }

    // Lier les paramètres à la requête SQL
    $stmt->bind_param("sss", $username, $email, $hashedPassword);

    // Exécuter la requête et vérifier le succès
    if ($stmt->execute()) {
        // Rediriger vers la page de connexion après l'inscription réussie
        header("Location: login.html");
        exit();
    } else {
        // Afficher l'erreur si l'exécution a échoué
        die("Erreur lors de l'insertion : " . $stmt->error);
    }

    // Fermer la requête
    $stmt->close();
}

// Fermer la connexion
$conn->close();
?>
