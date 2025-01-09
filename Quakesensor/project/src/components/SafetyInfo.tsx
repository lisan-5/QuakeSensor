import { Shield, Phone, AlertCircle, Info } from 'lucide-react';

export default function SafetyInfo() {
  return (
    <div className="bg-gray-800/90 backdrop-blur-md rounded-lg shadow-lg p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">Safety Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-400">During an Earthquake</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Drop, Cover, and Hold On</li>
                <li>Stay away from windows</li>
                <li>If indoors, stay there</li>
                <li>If outdoors, move to an open area</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="w-6 h-6 text-green-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-green-400">Emergency Contacts</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Emergency: 911 / 907</li>
                <li>Ethiopian Red Cross: +251 11 515 38 53</li>
                <li>National Disaster Risk Management: +251 11 551 4955</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-400">After an Earthquake</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Check for injuries</li>
                <li>Be prepared for aftershocks</li>
                <li>Listen to official information</li>
                <li>Help others if you can</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Info className="w-6 h-6 text-purple-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-purple-400">Preparedness Tips</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Create an emergency kit</li>
                <li>Know safe spots in each room</li>
                <li>Keep important documents safe</li>
                <li>Have a family emergency plan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}