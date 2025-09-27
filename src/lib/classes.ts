import pool from './db';
import { Class } from '../types/class';

export async function getClasses(): Promise<Class[]> {
  try {
    const result = await pool.query('SELECT * FROM education.classes ORDER BY id');
    return result.rows;
  } catch (error) {
    console.error('Error fetching classes:', error);
    throw new Error('Failed to fetch classes');
  }
}

export async function getClassById(id: number): Promise<Class | null> {
  try {
    const result = await pool.query('SELECT * FROM education.classes WHERE id = $1', [id]);
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error fetching class:', error);
    throw new Error('Failed to fetch class');
  }
}