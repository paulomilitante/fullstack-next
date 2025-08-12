CREATE TABLE IF NOT EXISTS cards (
    id SERIAL PRIMARY KEY,
    click_count INTEGER NOT NULL DEFAULT 0,
    first_click_ts TIMESTAMPTZ NULL
);

-- Insert cards 1 through 8
INSERT INTO cards (id, click_count, first_click_ts)
SELECT gs.id, 0, NULL
FROM generate_series(1, 8) AS gs(id)
ON CONFLICT (id) DO NOTHING;