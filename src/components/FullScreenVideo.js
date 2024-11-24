import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next"; // Хук для перекладу
import "../i18n"; // Імпортуємо конфігурацію перекладів

const FullScreenVideo = () => {
    const { t } = useTranslation(); // Використовуємо переклади
    const [loading, setLoading] = useState(true); // Стан завантаження

    const handleVideoLoad = () => {
        setLoading(false); // Відео завантажено
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center vh-100 bg-dark flex-column"
            style={{ position: "relative" }}
        >
            {/* Заголовок */}
            <h1
                className="text-white text-center mb-4"
                style={{ zIndex: 1000, position: "absolute", top: "20px" }}
            >
                {t("promoVideo.title")}
            </h1>

            {/* Індикатор завантаження */}
            {loading && (
                <div
                    className="position-absolute text-white text-center"
                    style={{ zIndex: 1000 }}
                >
                    <div className="spinner-border text-light" role="status">
                        <span className="sr-only">{t("promoVideo.loading")}</span>
                    </div>
                    <p className="mt-3">{t("promoVideo.loadingText")}</p>
                </div>
            )}

            {/* Відео iframe */}
            <iframe
                src="https://drive.google.com/file/d/17HsNyaiqD6xYmywk7FXFKjxMbQdYNZ_M/preview"
                width="100%"
                height="100%"
                allow="autoplay"
                onLoad={handleVideoLoad} // Обробка завантаження
                style={{
                    border: "none",
                    display: loading ? "none" : "block", // Приховуємо iframe, доки воно не завантажиться
                }}
                allowFullScreen
            ></iframe>

            {/* Текст для перегляду */}
            {!loading && (
                <p
                    className="text-white text-center position-absolute"
                    style={{ bottom: "20px", zIndex: 1000 }}
                >
                    {t("promoVideo.playPrompt")}
                </p>
            )}
        </div>
    );
};

export default FullScreenVideo;
