import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSkills } from "@/contexts/SkillsContext";
import {
  Cross2Icon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";

const SkillsExplorer: React.FC = () => {
  const {
    skillCategories,
    selectedSkills,
    toggleSkill,
    clearSkills,
    filteredProjects,
  } = useSkills();
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setScrollPosition({
      x: e.pageX - scrollRef.current!.offsetLeft,
      y: e.pageY - scrollRef.current!.offsetTop,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - scrollPosition.x) * 2;
      scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const filteredCategories = skillCategories
    .map((category) => ({
      ...category,
      skills: category.skills.filter((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.skills.length > 0);

  return (
    <div className="mb-16">
      {/* Skills Browser */}
      <div className="relative mb-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-dark-grey hover:text-highlight-orange transition-colors flex items-center gap-1 mb-4"
        >
          {isExpanded ? (
            <>
              <ChevronUpIcon className="w-5 h-5" />
              <span>Hide Skills Browser</span>
            </>
          ) : (
            <>
              <ChevronDownIcon className="w-5 h-5" />
              <span>Browse Skills</span>
            </>
          )}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Search Bar */}
              <div className="relative mb-4">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-grey" />
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:border-highlight-orange"
                />
              </div>

              {/* Category Tabs - Now with drag scroll and styled scrollbar */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto pb-2 mb-4 cursor-grab active:cursor-grabbing select-none
                  [&::-webkit-scrollbar]:h-1.5
                  [&::-webkit-scrollbar-track]:bg-transparent
                  [&::-webkit-scrollbar-thumb]:bg-white/20
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  hover:[&::-webkit-scrollbar-thumb]:bg-white/30
                  scrollbar-thin
                  scrollbar-track-transparent
                  scrollbar-thumb-gray-300
                  hover:scrollbar-thumb-gray-400"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {filteredCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() =>
                      setActiveCategory(
                        activeCategory === category.name ? "" : category.name
                      )
                    }
                    className={`whitespace-nowrap px-4 py-2 rounded-full mr-2 text-sm font-medium transition-colors ${
                      activeCategory === category.name
                        ? "bg-highlight-orange text-white"
                        : "bg-off-white text-dark-grey hover:bg-white/10"
                    }`}
                  >
                    {category.name}
                    {category.name === "Top Skills" && (
                      <StarFilledIcon className="inline-block w-4 h-4 ml-1 text-white" />
                    )}
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <AnimatePresence mode="wait">
                {activeCategory && (
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-off-white rounded-lg p-4"
                  >
                    <div className="flex flex-wrap gap-2">
                      {filteredCategories
                        .find((cat) => cat.name === activeCategory)
                        ?.skills.map((skill) => (
                          <motion.button
                            key={skill}
                            onClick={() => toggleSkill(skill)}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                              selectedSkills.includes(skill)
                                ? "bg-highlight-orange/20 text-highlight-orange"
                                : "bg-white/10 text-off-black hover:bg-white/20"
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {skill}
                            {selectedSkills.includes(skill) && (
                              <Cross2Icon className="inline-block ml-1 w-3 h-3" />
                            )}
                          </motion.button>
                        ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Selected Skills Display - Moved below skills panel */}
      {selectedSkills.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-off-black">
              Selected Skills
            </h3>
            <button
              onClick={clearSkills}
              className="text-sm text-dark-grey hover:text-highlight-orange transition-colors"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedSkills.map((skill) => (
              <motion.button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className="bg-highlight-orange text-white px-3 py-1 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
                <Cross2Icon className="inline-block ml-1 w-3 h-3" />
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Filtered Projects Section */}
      {selectedSkills.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-off-black">
            Projects using {selectedSkills.join(" & ")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-off-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group"
              >
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-off-black mb-2">
                    {project.title}
                  </h4>
                  <p className="text-dark-grey mb-4">{project.description}</p>
                  <div className="flex flex-wrap">
                    {project.techStack.map((tech: string) => (
                      <span
                        key={tech}
                        className={`bg-white/10 text-off-black text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full ${
                          selectedSkills.includes(tech)
                            ? "bg-highlight-orange/20 text-highlight-orange"
                            : ""
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SkillsExplorer;
