create table provinces
(
    id   int unsigned auto_increment
        primary key,
    name varchar(50) null,
    code varchar(20) null
)
    collate = utf8_unicode_ci;

INSERT INTO citizenv.provinces (id, name, code) VALUES (1, 'Hồ Chí Minh', 'SG');
INSERT INTO citizenv.provinces (id, name, code) VALUES (2, 'Hà Nội', 'HN');
INSERT INTO citizenv.provinces (id, name, code) VALUES (3, 'Đà Nẵng', 'DDN');
INSERT INTO citizenv.provinces (id, name, code) VALUES (4, 'Bình Dương', 'BD');
INSERT INTO citizenv.provinces (id, name, code) VALUES (5, 'Đồng Nai', 'DNA');
INSERT INTO citizenv.provinces (id, name, code) VALUES (6, 'Khánh Hòa', 'KH');
INSERT INTO citizenv.provinces (id, name, code) VALUES (7, 'Hải Phòng', 'HP');
INSERT INTO citizenv.provinces (id, name, code) VALUES (8, 'Long An', 'LA');
INSERT INTO citizenv.provinces (id, name, code) VALUES (9, 'Quảng Nam', 'QNA');
INSERT INTO citizenv.provinces (id, name, code) VALUES (10, 'Bà Rịa Vũng Tàu', 'VT');
INSERT INTO citizenv.provinces (id, name, code) VALUES (11, 'Đắk Lắk', 'DDL');
INSERT INTO citizenv.provinces (id, name, code) VALUES (12, 'Cần Thơ', 'CT');
INSERT INTO citizenv.provinces (id, name, code) VALUES (13, 'Bình Thuận  ', 'BTH');
INSERT INTO citizenv.provinces (id, name, code) VALUES (14, 'Lâm Đồng', 'LDD');
INSERT INTO citizenv.provinces (id, name, code) VALUES (15, 'Thừa Thiên Huế', 'TTH');
INSERT INTO citizenv.provinces (id, name, code) VALUES (16, 'Kiên Giang', 'KG');
INSERT INTO citizenv.provinces (id, name, code) VALUES (17, 'Bắc Ninh', 'BN');
INSERT INTO citizenv.provinces (id, name, code) VALUES (18, 'Quảng Ninh', 'QNI');
INSERT INTO citizenv.provinces (id, name, code) VALUES (19, 'Thanh Hóa', 'TH');
INSERT INTO citizenv.provinces (id, name, code) VALUES (20, 'Nghệ An', 'NA');
INSERT INTO citizenv.provinces (id, name, code) VALUES (21, 'Hải Dương', 'HD');
INSERT INTO citizenv.provinces (id, name, code) VALUES (22, 'Gia Lai', 'GL');
INSERT INTO citizenv.provinces (id, name, code) VALUES (23, 'Bình Phước', 'BP');
INSERT INTO citizenv.provinces (id, name, code) VALUES (24, 'Hưng Yên', 'HY');
INSERT INTO citizenv.provinces (id, name, code) VALUES (25, 'Bình Định', 'BDD');
INSERT INTO citizenv.provinces (id, name, code) VALUES (26, 'Tiền Giang', 'TG');
INSERT INTO citizenv.provinces (id, name, code) VALUES (27, 'Thái Bình', 'TB');
INSERT INTO citizenv.provinces (id, name, code) VALUES (28, 'Bắc Giang', 'BG');
INSERT INTO citizenv.provinces (id, name, code) VALUES (29, 'Hòa Bình', 'HB');
INSERT INTO citizenv.provinces (id, name, code) VALUES (30, 'An Giang', 'AG');
INSERT INTO citizenv.provinces (id, name, code) VALUES (31, 'Vĩnh Phúc', 'VP');
INSERT INTO citizenv.provinces (id, name, code) VALUES (32, 'Tây Ninh', 'TNI');
INSERT INTO citizenv.provinces (id, name, code) VALUES (33, 'Thái Nguyên', 'TN');
INSERT INTO citizenv.provinces (id, name, code) VALUES (34, 'Lào Cai', 'LCA');
INSERT INTO citizenv.provinces (id, name, code) VALUES (35, 'Nam Định', 'NDD');
INSERT INTO citizenv.provinces (id, name, code) VALUES (36, 'Quảng Ngãi', 'QNG');
INSERT INTO citizenv.provinces (id, name, code) VALUES (37, 'Bến Tre', 'BTR');
INSERT INTO citizenv.provinces (id, name, code) VALUES (38, 'Đắk Nông', 'DNO');
INSERT INTO citizenv.provinces (id, name, code) VALUES (39, 'Cà Mau', 'CM');
INSERT INTO citizenv.provinces (id, name, code) VALUES (40, 'Vĩnh Long', 'VL');
INSERT INTO citizenv.provinces (id, name, code) VALUES (41, 'Ninh Bình', 'NB');
INSERT INTO citizenv.provinces (id, name, code) VALUES (42, 'Phú Thọ', 'PT');
INSERT INTO citizenv.provinces (id, name, code) VALUES (43, 'Ninh Thuận', 'NT');
INSERT INTO citizenv.provinces (id, name, code) VALUES (44, 'Phú Yên', 'PY');
INSERT INTO citizenv.provinces (id, name, code) VALUES (45, 'Hà Nam', 'HNA');
INSERT INTO citizenv.provinces (id, name, code) VALUES (46, 'Hà Tĩnh', 'HT');
INSERT INTO citizenv.provinces (id, name, code) VALUES (47, 'Đồng Tháp', 'DDT');
INSERT INTO citizenv.provinces (id, name, code) VALUES (48, 'Sóc Trăng', 'ST');
INSERT INTO citizenv.provinces (id, name, code) VALUES (49, 'Kon Tum', 'KT');
INSERT INTO citizenv.provinces (id, name, code) VALUES (50, 'Quảng Bình', 'QB');
INSERT INTO citizenv.provinces (id, name, code) VALUES (51, 'Quảng Trị', 'QT');
INSERT INTO citizenv.provinces (id, name, code) VALUES (52, 'Trà Vinh', 'TV');
INSERT INTO citizenv.provinces (id, name, code) VALUES (53, 'Hậu Giang', 'HGI');
INSERT INTO citizenv.provinces (id, name, code) VALUES (54, 'Sơn La', 'SL');
INSERT INTO citizenv.provinces (id, name, code) VALUES (55, 'Bạc Liêu', 'BL');
INSERT INTO citizenv.provinces (id, name, code) VALUES (56, 'Yên Bái', 'YB');
INSERT INTO citizenv.provinces (id, name, code) VALUES (57, 'Tuyên Quang', 'TQ');
INSERT INTO citizenv.provinces (id, name, code) VALUES (58, 'Điện Biên', 'DDB');
INSERT INTO citizenv.provinces (id, name, code) VALUES (59, 'Lai Châu', 'LCH');
INSERT INTO citizenv.provinces (id, name, code) VALUES (60, 'Lạng Sơn', 'LS');
INSERT INTO citizenv.provinces (id, name, code) VALUES (61, 'Hà Giang', 'HG');
INSERT INTO citizenv.provinces (id, name, code) VALUES (62, 'Bắc Kạn', 'BK');
INSERT INTO citizenv.provinces (id, name, code) VALUES (63, 'Cao Bằng', 'CB');
