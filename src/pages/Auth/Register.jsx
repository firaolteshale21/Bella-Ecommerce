import { useState } from 'react';
import axios from 'axios';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const Register = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Full name validation
  const handleFullNameChange = (e) => {
    let value = e.target.value;
    const nameRegex = /^[A-Za-z\s]*$/;

    if (nameRegex.test(value)) {
      value = value.replace(/\b\w/g, (char) => char.toUpperCase());
      setFullNameError('');
    } else {
      setFullNameError('Full name must contain only alphabetic letters');
    }

    setFullName(value);
  };

  // Ethiopian phone number validation
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const ethiopianPhoneRegex = /^(?:\+251|0)[1-9]\d{8}$/;

    if (ethiopianPhoneRegex.test(value)) {
      setPhoneError('');
    } else {
      setPhoneError('Please enter a valid Ethiopian phone number (e.g., +2519******** or 09********)');
    }

    setPhoneNumber(value);
  };

  // Password validation
  const validatePassword = () => {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;

    if (password.length < minLength) {
      setPasswordError('Password must be at least 8 characters long');
    } else if (!hasNumber.test(password)) {
      setPasswordError('Password must contain at least one number');
    } else if (!hasSpecialChar.test(password)) {
      setPasswordError('Password must contain at least one special character');
    } else if (!hasUpperCase.test(password)) {
      setPasswordError('Password must contain at least one uppercase letter');
    } else if (!hasLowerCase.test(password)) {
      setPasswordError('Password must contain at least one lowercase letter');
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    validatePassword();

    if (fullNameError || phoneError || passwordError || confirmPasswordError || !fullName || !phoneNumber || !password || password !== confirmPassword) {
      alert('Please fix the errors before submitting');
      return;
    }

    const userData = { fullName, phoneNumber, password };

    try {
      const response = await axios.post('/api/register', userData);
      alert('Registration successful!');
      console.log(response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <input type="hidden" name="remember" value="true" />

      {/* Full Name */}
      <div className="relative">
        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Full Name:</label>
        <input
          className={`w-full text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500 ${fullNameError && 'border-red-500'}`}
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={handleFullNameChange}
        />
        {fullNameError && <p className="text-red-500 text-sm mt-2">{fullNameError}</p>}

        {/* Phone Number */}
        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide mt-4">Phone Number</label>
        <input
          className={`w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500 ${phoneError && 'border-red-500'}`}
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        {phoneError && <p className="text-red-500 text-sm mt-2">{phoneError}</p>}
      </div>

      {/* Password */}
      <div className="mt-8 relative">
        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Password</label>
        <input
          className={`w-full text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500 ${passwordError && 'border-red-500'}`}
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </div>
        {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
      </div>

      {/* Confirm Password */}
      <div className="mt-8 relative">
        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Confirm Password</label>
        <input
          className={`w-full text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500 ${confirmPasswordError && 'border-red-500'}`}
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
          {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </div>
        {confirmPasswordError && <p className="text-red-500 text-sm mt-2">{confirmPasswordError}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};
