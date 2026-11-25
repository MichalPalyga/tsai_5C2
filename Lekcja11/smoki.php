<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smoki</title>
    <link rel="stylesheet" href="styl.css">
</head>

<body>
<?php
    $conn = new mysqli("localhost", "root", "", "smoki");
?>
    <header>
        <h2>Poznaj smoki!</h2>
    </header>
    <nav>
        <div id="Bazab">Baza</div>
        <div id="Opisyb">Opisy</div>
        <div id="Galeriab">Galeria</div>
    </nav>
    <main>
        <section id="baza">
            <h3>Baza Smoków</h3>
            <form method="post">
                <select name="baza" id="baza">
                    <?php $sql = "SELECT DISTINCT pochodzenie FROM smok ORDER BY pochodzenie ASC";
                if ($result = $conn->query($sql)) {
                    while ($row = $result->fetch_assoc()) {
                        $pochodzenie = $row['pochodzenie'];
                        echo "<option value=\"{$pochodzenie}\">{$pochodzenie}</option>";
                    }
                    $result->free();
                }?>
                </select>
                <button type="submit">Szukaj</button>
            </form>
            <table>
                <tr>
                    <th>Nazwa</th>
                    <th>Długość</th>
                    <th>Szerokość</th>
                </tr>
                <?php
                        if (isset($_POST['baza'])) {
                            $kraj = $_POST['baza'];
                            $smoki = mysqli_query($conn, "SELECT nazwa, dlugosc, szerokosc FROM smok WHERE pochodzenie = '$kraj';");
                            while ($row = mysqli_fetch_row($smoki)) {
                                echo "<tr><td>$row[0]</td>
                                          <td>$row[1]</td>
                                          <td>$row[2]</td>
                                    </tr>";
                            }
                        }
                    ?>
            </table>
        </section>
        <section id="opis">
            <h3>Opisy smoków</h3>
            <dl>
                <dt>Smok czerwony</dt>
                <dd>Pochodzi z Chin. Ma 1000 lat. Żywi się mniejszymi zwierzętami. Posiada łuski cenne na rynkach
                    wschodnich do wyrabiania lekarstw. Jest dziki i groźny.</dd>
                <dt>Smok zielony</dt>
                <dd>Pochodzi z Bułgarii. Ma 10000 lat. Żywi się mniejszymi zwierzętami, ale tylko w kolorze zielonym.
                    Jest kosmaty. Z sierści zgubionej przez niego, tka się najdroższe materiały.</dd>
                <dt>Smok niebieski</dt>
                <dd>Pochodzi z Francji. Ma 100 lat. Żywi się owocami morza. Jest natchnieniem dla najlepszych malarzy.
                    Często im pozuje. Smok ten jest przyjacielem ludzi i czasami im pomaga. Jest jednak próżny i nie
                    lubi się przepracowywać.</dd>
            </dl>
        </section>
        <section id="galeria">
            <h3>Galeria</h3>
            <img src="smok1.jpg" alt="Smok czerwony">
            <img src="smok2.jpg" alt="Smok wielki">
            <img src="smok3.jpg" alt="Smok niebieski">
        </section>
    </main>
    <footer>
        <p>Stronę opracował: 22</p>
    </footer>
</body>
<?php
    $conn->close();
?>  
<script src="script.js"></script>
</html>