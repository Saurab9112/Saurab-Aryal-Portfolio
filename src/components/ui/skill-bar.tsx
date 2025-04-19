
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  className?: string;
}

export const SkillBar = ({ name, percentage, className }: SkillBarProps) => {
  return (
    <div className={cn("mb-6", className)}>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-gray-200">{name}</span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          className="bg-teal-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
};
