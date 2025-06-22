import { Card, CardContent } from '../ui/card';
import { BookOpen, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Three simple steps to your personalized lesson</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">1. Choose Category</h3>
              <p className="text-gray-600">Select from our wide range of subjects and subcategories to find exactly what you want to learn.</p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">2. Customize</h3>
              <p className="text-gray-600">Tailor your lesson length, difficulty level, and whether you want examples included.</p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">3. Get Your Lesson</h3>
              <p className="text-gray-600">Receive a personalized, AI-generated lesson tailored specifically to your learning preferences.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
export default About;