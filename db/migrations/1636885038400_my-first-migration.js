/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
	pgm.createTable('widgets', {
		id: 'id',
		name: { type: 'varchar(100)', notNull: true },
	});
};
