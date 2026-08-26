<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed.']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid form payload.']);
    exit;
}

// Honeypot check
if (!empty($input['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

function clean($value, $maxLength) {
    return substr(trim($value ?? ''), 0, $maxLength);
}

$name    = clean($input['name'], 100);
$company = clean($input['company'], 120);
$email   = clean($input['email'], 254);
$message = clean($input['message'], 5000);

$emailPattern = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';

if (!$name || !preg_match($emailPattern, $email) || !$message) {
    http_response_code(400);
    echo json_encode(['message' => 'Please complete your name, valid email, and project details.']);
    exit;
}

$to      = 'hello@cjtrading.co.id'; // ← Ganti email tujuan di sini
$subject = "Website inquiry from {$name}" . ($company ? " — {$company}" : "");

$headers  = "From: CJ Trading Website <noreply@cjtrading.co.id>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$body  = "Name: {$name}\r\n";
$body .= "Company: " . ($company ?: '-') . "\r\n";
$body .= "Email: {$email}\r\n\r\n";
$body .= "Project details:\r\n{$message}\r\n";

$sent = @mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(502);
    echo json_encode(['message' => 'The email could not be sent. Please try again shortly.']);
}
