<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars(trim($_POST['nom']));
    $prenom = htmlspecialchars(trim($_POST['prenom']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
}
    $message = "<h1>Vous avez reçu un message de la part de $email</h1>";
    $message .= "<p>Le contenu du message est le suivant : </p>";
    $message .= "<em>" . $_POST['message'] . "</em>";
    $message .= "<p><img src='https://images.app.goo.gl/5pTfEsfJKwbpjcXMA'></p>";

    $headers = 'MIME-Version: 1.0' . "\r\n" .
    'Content-type: text/html; charset=UTF-8' . "\r\n" .
    'From: hugo.delaunay1@univ-rouen.fr' . "\r\n" .
    'Reply-To: hugo.delaunay1@univ-rouen.fr' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if (mail("hugo.delaunay1@univ-rouen.fr", "Nouveau message depuis le formulaire", $message, $headers)) {
        echo "<h1>Le message a bien été envoyé</h1>";
    } else {
        echo "<h1>Une erreur est survenue lors de la transmission de vos données</h1>";
    }

//     header("Location: ../php/confirmation.php"){;
//     exit();
// } else {
//     header("Location: ../html/contact.html");
//     exit();
// }
?>
