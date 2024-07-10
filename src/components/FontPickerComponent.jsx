import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';

// Масиви шрифтів для категорій Display та Handwriting
const displayFonts = [
    'Roboto', 'Open Sans', 'Montserrat', 'Lato', 'Oswald', 'Roboto Condensed',
    'PT Sans', 'Source Sans Pro', 'Nunito', 'Playfair Display', 'Merriweather',
    'Raleway', 'Ubuntu', 'Cabin', 'Poppins', 'Quicksand', 'Archivo', 'Titillium Web',
    'Bebas Neue', 'Anton', 'Barlow', 'Catamaran', 'Dosis', 'Exo', 'Fira Sans',
    'Hind', 'Jura', 'Karla', 'Libre Franklin', 'Muli', 'Noto Sans', 'Overpass',
    'Pacifico', 'Quattrocento Sans', 'Rubik', 'Signika', 'Teko', 'Varela Round',
    'Yanone Kaffeesatz', 'Zilla Slab',
];

const handwritingFonts = [
    'Amatic SC', 'Dancing Script', 'Indie Flower', 'Permanent Marker', 'Great Vibes',
    'Shadows Into Light', 'Patrick Hand', 'Sacramento', 'Covered By Your Grace',
    'Kaushan Script', 'Lobster', 'Allura', 'Cookie', 'Gloria Hallelujah', 'Grand Hotel',
    'Homemade Apple', 'Italianno', 'Kalam', 'Marck Script', 'Mystery Quest', 'Norican',
    'Pacifico', 'Parisienne', 'Petit Formal Script', 'Quintessential', 'Reenie Beanie',
    'Rochester', 'Rouge Script', 'Satisfy', 'Tangerine', 'Yellowtail', 'Zeyada',
];

const FontPickerComponent = () => {
    const [fonts, setFonts] = useState([]);
    const [selectedFont, setSelectedFont] = useState('');
    const [previewText, setPreviewText] = useState('Sample Text');
    const [fontLoaded, setFontLoaded] = useState(false);
    const [fontStyle, setFontStyle] = useState('handwriting'); // Стиль шрифту: handwriting або display

    // Завантаження шрифтів при зміні категорії
    useEffect(() => {
        const allFonts = fontStyle === 'handwriting' ? handwritingFonts : displayFonts;
        setFonts(allFonts.map(font => ({ label: font, value: font })));

        // Завантаження шрифтів з Google Fonts для попереднього перегляду
        allFonts.forEach(font => {
            const link = document.createElement('link');
            link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, '+')}:wght@400;700&display=swap`;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        });
    }, [fontStyle]);

    // Завантаження вибраного шрифту для попереднього перегляду
    useEffect(() => {
        if (selectedFont) {
            const link = document.createElement('link');
            link.href = `https://fonts.googleapis.com/css2?family=${selectedFont.replace(/ /g, '+')}:wght@400;700&display=swap`;
            link.rel = 'stylesheet';

            document.head.appendChild(link);

            link.onload = () => {
                setFontLoaded(true);
            };

            return () => {
                document.head.removeChild(link);
                setFontLoaded(false);
            };
        }
    }, [selectedFont]);

    const handleCategoryChange = (style) => {
        setFontStyle(style);
        setSelectedFont('');
    };

    // Кастомні стилі для компоненту Select, включаючи застосування відповідного шрифту до кожної опції
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            fontFamily: state.data.value, // Застосування відповідного шрифту
            fontSize: '18px', // Збільшено розмір тексту для кращої видимості
            color: '#000', // Чорний колір для тексту
            backgroundColor: '#fff', // Білий фон для опцій
        }),
        control: (provided) => ({
            ...provided,
            width: 300, // Збільшено ширину для кращого вигляду
            fontSize: '18px',
            backgroundColor: '#fff', // Білий фон для елементу select
        }),
        singleValue: (provided, state) => ({
            ...provided,
            fontFamily: state.data.value, // Застосування відповідного шрифту до вибраного значення
            fontSize: '18px', // Збільшено розмір тексту
            color: '#000', // Чорний колір для тексту
            backgroundColor: '#fff', // Білий фон для відображення вибраного шрифту
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: '#fff', // Білий фон для списку опцій
        }),
    };

    return (
        <div className="container mt-5">
            <h2>Оберіть шрифт майбутнього тату</h2>
            <div className="mb-3">
                <Select
                    options={fonts}
                    onChange={(selectedOption) => setSelectedFont(selectedOption.value)}
                    styles={customStyles}
                    placeholder="Оберіть шрифт"
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary: '#007bff', // Синій колір для обраної опції
                            primary25: '#d3e2ff', // Світло-синій колір для фону при наведенні
                        },
                    })}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={previewText}
                    onChange={(e) => setPreviewText(e.target.value)}
                    placeholder="Введіть текст"
                />
            </div>
            {fontLoaded && (
                <div style={{ fontFamily: selectedFont, fontSize: '40px', color: '#000', backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>
                    <h3>Попередній перегляд:</h3>
                    <p>{previewText}</p>
                </div>
            )}
            <div className="mt-3 mb-3 d-flex flex-column flex-sm-row">
                <button
                    className={`btn btn-primary me-2 ${fontStyle === 'handwriting' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('handwriting')}
                    style={{ marginBottom: '10px' }}
                >
                    Шрифти як від руки
                </button>
                <button
                    className={`btn btn-primary ${fontStyle === 'display' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('display')}
                    style={{ marginBottom: '10px' }}
                >
                    Друковані шрифти
                </button>
            </div>

        </div>
    );
};

export default FontPickerComponent;
