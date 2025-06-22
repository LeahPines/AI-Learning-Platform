import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

const LoginForm = ({ formData, error, isLoading, handleChange, handleSubmit, }) => (
    <form onSubmit={handleSubmit} className="space-y-4">
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
                required
                className="mt-1"
            />
        </div>

        <div>
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
            </Label>
            <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1"
            />
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
            {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
    </form>
);

export default LoginForm;