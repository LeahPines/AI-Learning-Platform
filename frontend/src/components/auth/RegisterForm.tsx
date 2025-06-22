import React from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

const RegisterForm = ({
    formData,
    validationErrors,
    error,
    isLoading,
    handleChange,
    handleSubmit,
}) => (
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name
            </Label>
            <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className={validationErrors.name ? 'border-red-500' : ''}
            />
            {validationErrors.name && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
            )}
        </div>

        <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
            </Label>
            <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className={validationErrors.phone ? 'border-red-500' : ''}
            />
            {validationErrors.phone && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
            )}
        </div>

        <div>
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
            </Label>
            <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className={validationErrors.password ? 'border-red-500' : ''}
            />
            {validationErrors.password && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.password}</p>
            )}
        </div>

        <div>
            <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm Password
            </Label>
            <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={validationErrors.confirmPassword ? 'border-red-500' : ''}
            />
            {validationErrors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.confirmPassword}</p>
            )}
        </div>

        {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
            </div>
        )}

        <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
            {isLoading ? 'Creating account...' : 'Create Account'}
        </Button>
    </form>
);

export default RegisterForm;