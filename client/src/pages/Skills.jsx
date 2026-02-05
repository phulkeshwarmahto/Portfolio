import { useState, useEffect } from 'react';
import axios from 'axios';
import SkillsComponent from '../components/Skills';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const { data } = await axios.get('/api/skills');
                setSkills(data);
            } catch (error) {
                console.error("Failed to fetch skills", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSkills();
    }, []);

    // If loading or no skills, we could show a loader. 
    // However, if no skills, the component handles empty arrays gracefully (though cards might be hidden).
    // Let's pass what we have.

    return (
        <div className="min-h-screen">
            <SkillsComponent skills={skills} />
        </div>
    );
};

export default Skills;
