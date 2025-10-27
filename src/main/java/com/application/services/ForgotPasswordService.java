package com.application.services;

import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.application.model.User;
import com.application.repository.UserRepository;

@Service
public class ForgotPasswordService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    // Generate and send OTP
    public String generateOtp(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return "Email not registered!";
        }

        // Generate 6-digit OTP
        String otp = String.valueOf((int) ((Math.random() * 900000) + 100000));
        user.setOtp(otp);
        user.setOtpExpiry(LocalDateTime.now().plusMinutes(5));
        userRepository.save(user);

        // Send email
        emailService.sendOtpEmail(email, otp);
        return "OTP sent successfully to " + email;
    }

    // Verify OTP and reset password
    public String verifyOtpAndChangePassword(String email, String otp, String newPassword) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return "Invalid email!";
        }

        if (user.getOtp() == null || user.getOtpExpiry().isBefore(LocalDateTime.now())) {
            return "OTP expired!";
        }

        if (!user.getOtp().equals(otp)) {
            return "Invalid OTP!";
        }

        // Update password
        user.setPassword(newPassword); // (You can encode it if you use Spring Security)
        user.setOtp(null);
        user.setOtpExpiry(null);
        userRepository.save(user);

        return "Password changed successfully!";
    }
}
