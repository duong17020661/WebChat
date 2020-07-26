-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th7 26, 2020 lúc 05:16 PM
-- Phiên bản máy phục vụ: 8.0.17
-- Phiên bản PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `chat`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `files`
--

CREATE TABLE `files` (
  `Id` char(36) NOT NULL,
  `convId` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `filePath` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `type` int(11) NOT NULL,
  `typeOf` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `files`
--

INSERT INTO `files` (`Id`, `convId`, `content`, `filePath`, `type`, `typeOf`) VALUES
('05056f3f-0b41-eafb-2087-c4f988b72dd2', 'conv-vn-1-NO20OWUHMD-1594421856292', '5.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/25/KLQFRIZEPW-1595691487888.svg', 5, 'svg'),
('154bb564-6d6e-32ad-dc99-3cb47de3a8c6', 'conv-vn-1-NO20OWUHMD-1594421856292', '8.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/26/VLFMNTCWQI-1595771049420.svg', 2, 'image'),
('2e74f998-8015-6e7f-a03c-614a1e46b8d8', 'conv-vn-1-NO20OWUHMD-1594421857302', 'Guideline.png', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/24/XRDQCELRNH-1595601642677.png', 5, 'png'),
('52033969-9f5a-e122-1f65-fe698c771f68', 'conv-vn-1-NO20OWUHMD-1594421857165', '6.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/25/DPNQWNVSRX-1595667130459.svg', 2, 'image'),
('58810342-b267-6301-fd29-8f5564472f56', 'conv-vn-1-NO20OWUHMD-1594421857302', 'pdf-icon.png', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/24/HECRBRDGBT-1595601619276.png', 2, 'image'),
('5907c630-b0ff-8dca-10c4-3a4721e25892', 'conv-vn-1-NO20OWUHMD-1594421857165', '12.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/25/QIOSMCIKCO-1595667121303.svg', 2, 'image'),
('5fc14e41-e8c5-0868-bfe8-4d97a77f2cf1', 'conv-vn-1-WZPKQ4ZWWE-1595456734236', '5.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/26/FDMYWUFNBE-1595782008433.svg', 5, 'svg'),
('650c0834-cd5d-8597-ea18-fdafa220e706', 'conv-vn-1-NO20OWUHMD-1594421856292', '3.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/26/NEAPPGYSFV-1595771052880.svg', 5, 'svg'),
('6f81a41d-9c83-68fc-b1c1-9bd7031ec12c', 'conv-vn-1-NO20OWUHMD-1594421856292', '12.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/25/AEVEKVJSZV-1595667141854.svg', 2, 'image'),
('771e8d36-728b-69f8-209b-917f445172ef', 'conv-vn-1-NO20OWUHMD-1594421857165', '9.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/25/SJXNIOJNBT-1595667111396.svg', 2, 'image'),
('7b7dbadc-9c24-3e85-dd0f-5da8bac7439b', 'conv-vn-1-NO20OWUHMD-1594421857165', '8.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/24/CZBBYSEVKW-1595601669337.svg', 5, 'svg'),
('811cf638-4f65-5496-a874-3d1efbecfedd', 'conv-vn-1-NO20OWUHMD-1594421856292', '6.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/26/GTSRCOKMZB-1595781451773.svg', 5, 'svg'),
('89b85f88-eaf9-8b09-3fe6-3be52bec6d2e', 'conv-vn-1-NO20OWUHMD-1594421856292', '11.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/26/JIJMBPHBHD-1595758720990.svg', 5, 'svg'),
('92858d01-8e4a-b36f-a5dc-e46133ef28f2', 'conv-vn-1-NO20OWUHMD-1594421856292', '8.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/26/OKTHURAUXV-1595771043856.svg', 5, 'svg'),
('ab06efb5-43cd-cfa2-033b-576b0b48c6dd', 'conv-vn-1-WZPKQ4ZWWE-1595456734236', '8.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/26/LMWHFAJQDD-1595782002055.svg', 2, 'image'),
('ac7b6bbc-7f00-5adf-fb69-406ce65983f7', 'conv-vn-1-NO20OWUHMD-1594421857302', 'Guideline.png', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/24/OLOTWDYIEY-1595601633303.png', 2, 'image'),
('b181bad8-6f9c-a123-0751-b5d5537fd865', 'conv-vn-1-NO20OWUHMD-1594421857302', '2.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/24/MDFPRMRFTR-1595601655730.svg', 5, 'svg'),
('d0e06bd9-ec73-7587-1b91-2670eb39784f', 'conv-vn-1-NO20OWUHMD-1594421856292', '6.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/25/OBPJEMLNIO-1595667139499.svg', 5, 'svg'),
('dd3dc5ae-75aa-bbbe-4e2d-3f07401970b2', 'conv-vn-1-NO20OWUHMD-1594421856292', '10.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/25/MLGZZYHDEB-1595673409647.svg', 2, 'image'),
('e1d767a8-a3a4-cbe8-802a-2b1afbc4647e', 'conv-vn-1-NO20OWUHMD-1594421856292', '10.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/25/MVBPCWUTAU-1595691491151.svg', 2, 'image'),
('e3144cdb-64b5-b0ec-2cde-5c900dbbd207', 'conv-vn-1-NO20OWUHMD-1594421856292', '7.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/26/KUNROTUQDE-1595758724455.svg', 2, 'image'),
('fb8dad4e-f7e2-7bf2-bd0f-87e9d32f01aa', 'conv-vn-1-NO20OWUHMD-1594421856292', '11.svg', 'https://v2.stringee.com/stringeexchat/upload/6381/e3c9cb08585a40829bc88130b0b8ebdf/2020/07/26/QDIPSCJUEU-1595781456114.svg', 2, 'image');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
