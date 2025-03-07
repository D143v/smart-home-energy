<?php
// post_energy.php
require_once 'db.php'; // Include the database connection

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $appliance_name = isset($_POST['appliance_name']) ? $_POST['appliance_name'] : '';
    $energy_usage = isset($_POST['energy_usage']) ? $_POST['energy_usage'] : '';

    if (empty($appliance_name) || empty($energy_usage)) {
        echo json_encode(['error' => 'Appliance name and energy usage are required.']);
        exit;
    }

    $sql = "INSERT INTO energy_data (appliance_name, energy_usage) VALUES (?, ?)";
    $stmt = $pdo->prepare($sql);

    $stmt->execute([$appliance_name, $energy_usage]);

    echo json_encode(['message' => 'Energy data added successfully']);
} else {
    echo json_encode(['error' => 'Invalid request method.']);
}
