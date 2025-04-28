import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

interface ProviderInfoProps {
  name: string;
  specialty: string;
  bio: string;
  credentials: string[];
  imageUrl?: string;
}

const ProviderInfo: React.FC<ProviderInfoProps> = ({
  name,
  specialty,
  bio,
  credentials,
  imageUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-gray-500">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600  p-6 -mt-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-24 w-24 border-4 border-white shadow-md">
              <AvatarImage src={imageUrl} alt={name} />
              <AvatarFallback className="text-3xl font-bold bg-blue-200 text-blue-800">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl font-bold">{name}</CardTitle>
              <Badge
                variant="secondary"
                className="mt-2  text-purple-700 px-3 py-1 text-sm"
              >
                {specialty}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-2">About</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{bio}</p>
          </div>
          <Separator className="bg-gray-200" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-3">
              Credentials
            </h3>
            <ul className="space-y-2">
              {credentials.map((credential, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Badge
                    variant="outline"
                    className="mr-3 bg-blue-300 text-blue-700 border-blue-200 w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    {index + 1}
                  </Badge>
                  <span className="text-gray-700 dark:text-gray-400">{credential}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProviderInfo;
