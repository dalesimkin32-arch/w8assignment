-- week 8 assignment
CREATE TABLE IF NOT EXISTS m8_blog_posts (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    username VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS m8_blog_comments (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    post_id INT REFERENCES m8_blog_posts(id),
    username VARCHAR(30),
    comment TEXT
)

CREATE TABLE IF NOT EXISTS m8_blog_tags (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    name VARCHAR(255) NOT NULL
)

CREATE TABLE IF NOT EXISTS m8_blog_tags_posts (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    tag_id INT REFERENCES w8_blog_tags(id),
    post_id INT REFERENCES w8_blog_posts
)


INSERT INTO m8_blog_posts (title, content, username) VALUES
('Rush Hour Rants', 'A 40-minute delay turned my 20-minute commute into a masterclass in patience; lane closures near Junction 15 are a daily gamble and signage needs sorting.', 'motorway_malcolm'),
('Bridges, Buses and Broken Promises', 'Resurfacing works promised faster journeys, but buses still crawl and diversion signage pushes traffic into quiet streets—residents are fed up.', 'paisley_pedant'),
('Driver''s Diary: Sighthill to Langbank', 'The M8 linking Edinburgh and Glasgow is vital, yet the stretch past the West End is constantly congested; I now plan every trip around peak times.', 'eastbound_emma'),
('Heavy Goods, Heavy Delays', 'HGVs and poor merging behaviour create a central bottleneck; more enforcement and rethink of junction layouts would cut incident-related hold-ups.', 'haulage_harry'),
('Unexpected Scenery', 'Long queues are frustrating, but on clear days the Clyde views from parts of the M8 are a strange, small consolation when stuck in traffic.', 'scenic_sam'),
('Night Shift Navigation', 'Driving late is usually smoother, yet inconsistent lit signage and sudden lane closures can add half an hour to a detour—needs better night planning.', 'late_lane_lou'),
('Cyclists and Crossings Concern', 'Local diversion routes are forcing more traffic onto smaller roads and making crossings unsafe for cyclists and pedestrians in nearby neighbourhoods.', 'pedal_peter'),
('Service Station Strain', 'Service areas feel undersized for peak traffic; long queues for fuel and facilities on bank holidays make short breaks stressful rather than restful.', 'refuelling_rita'),
('Satnav Mismatch, Manual Delays', 'When temporary closures aren''t reflected on satnavs, drivers brake abruptly and incidents pile up; reliable real-time updates would help reduce secondary crashes.', 'gps_gareth'),
('Community Cost of Congestion', 'Traffic spilling into residential streets is the real issue: noise, pollution and safety concerns have made mornings unpleasant for local families.', 'resident_ron');

INSERT INTO m8_blog_comments (post_id, username, comment) VALUES
(1, 'robert_notthebruce', 'Totally relate — Junction 15 is chaos every morning.'),
(1, 'gps_gareth', 'Heard there was a breakdown today; needs faster incident response.'),
(2, 'haulage_harry', 'The resurfacing timeline has been ridiculous — no visible progress.'),
(2, 'only_ewe', 'Bus users I know are regularly delayed; reliability is falling.'),
(3, 'motorway_malcolm', 'I’ve started leaving much earlier to dodge that stretch.'),
(4, 'resident_ron', 'HGVs do slow things down but poor merging is the real culprit.'),
(5, 'late_lane_lou', 'Agree — the Clyde view is a small mercy on bad commutes.').
(5, 'only_ewe', 'Someone should make a photo series: “Beautiful delays.”'),
(9, 'dev_dave', 'Real-time feed updates for major apps would be a game-changer.'),
(9, 'notrob_roy', 'Authorities should provide live lane-status data to providers.')
