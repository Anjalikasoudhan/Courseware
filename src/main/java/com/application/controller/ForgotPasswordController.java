package com.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.application.services.ForgotPasswordService;

@RestController
@CrossOrigin(origins = "*")
public class ForgotPasswordController {

    @Autowired
    private ForgotPasswordService forgotPasswordService;

    @PostMapping("/forgot-password/{email}")
    public ResponseEntity<String> sendOtp(@PathVariable String email) {
        String response = forgotPasswordService.generateOtp(email);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(
            @RequestParam String email,
            @RequestParam String otp,
            @RequestParam String newPassword) {
        String response = forgotPasswordService.verifyOtpAndChangePassword(email, otp, newPassword);
        return ResponseEntity.ok(response);
    }
}
