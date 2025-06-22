import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PrimaryCTAButton = ({ label }: { label: string }) => {
    const navigate = useNavigate();
    return (
        <Button
            onClick={() => navigate('/prompt')}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
        >
            {label}
            <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
    );
};

export default PrimaryCTAButton;