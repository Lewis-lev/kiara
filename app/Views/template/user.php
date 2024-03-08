<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
    <script src="https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js"></script>
    <link rel="stylesheet" href="css/global.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kiara Rope Access</title>
</head>
<body>

        <nav class="kiara-nav">
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <i class="fa-solid fa-bars" style="color: white;"></i>    
            </label>
            <a class="logo" href="#">
                <img src="img/logo.png" alt="Logo" width="auto" height="60"> Kiara Rope Access
            </a>
            <ul>
                <li><a href="#"></a></li>
            </ul>
        </nav>

        <?= view($page_konten, $add_data); ?>

        <footer class="kiara-footer footer">
        <div class="outter">
            <div class="text">
                <br>
                Kiara Rope Access
            </div>
        </div>
    </footer>
</body>
</html>