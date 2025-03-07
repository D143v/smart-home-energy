<?php
// energy.php
require_once 'db.php'; // Include the database connection

header('Content-Type: application/json');

$sql = "SELECT appliance_name, energy_usage, timestamp FROM energy_data ORDER BY timestamp DESC LIMIT 10";
$stmt = $pdo->query($sql);

$energyData = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($energyData);
