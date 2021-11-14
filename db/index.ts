import { Pool, QueryResult } from 'pg';

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

export function query(queryText: string, params?: any[]): Promise<QueryResult<any>> {
	return pool.query(queryText, params);
}
