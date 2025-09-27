-- Create education schema
CREATE SCHEMA IF NOT EXISTS education;

-- Create classes table in education schema
CREATE TABLE education.classes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    duration VARCHAR(100) NOT NULL,
    schedule VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data matching the current hardcoded classes
INSERT INTO education.classes (name, description, duration, schedule) VALUES
('Beginner Class', 'Perfect for those just starting their journey.', '4 weeks', 'Mon, Wed, Fri'),
('Intermediate Class', 'Take your skills to the next level.', '6 weeks', 'Tue, Thu'),
('Advanced Class', 'Master advanced techniques and concepts.', '8 weeks', 'Weekends');