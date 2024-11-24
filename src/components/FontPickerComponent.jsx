import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    const [fonts, setFonts] = useState([]);
    const [selectedFont, setSelectedFont] = useState('');
    const [previewText, setPreviewText] = useState('Sample Text');
    const [fontLoaded, setFontLoaded] = useState(false);
    const [fontStyle, setFontStyle] = useState('handwriting'); // Стиль шрифту: handwriting або display

    useEffect(() => {
        const allFonts = fontStyle === 'handwriting' ? handwritingFonts : displayFonts;
        setFonts(allFonts.map(font => ({ label: font, value: font })));

        allFonts.forEach(font => {
            const link = document.createElement('link');
            link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, '+')}:wght@400;700&display=swap`;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        });
    }, [fontStyle]);

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

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            fontFamily: state.data.value,
            fontSize: '18px',
            color: '#000',
            backgroundColor: '#fff',
        }),
        control: (provided) => ({
            ...provided,
            width: 300,
            fontSize: '18px',
            backgroundColor: '#fff',
        }),
        singleValue: (provided, state) => ({
            ...provided,
            fontFamily: state.data.value,
            fontSize: '18px',
            color: '#000',
            backgroundColor: '#fff',
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: '#fff',
        }),
    };

    return (
        <div className="container mt-5">
            <h2>{t('fontPickerHeader')}</h2>
            <div className="mb-3">
                <Select
                    options={fonts}
                    onChange={(selectedOption) => setSelectedFont(selectedOption.value)}
                    styles={customStyles}
                    placeholder={t('fontPickerPlaceholder')}
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary: '#007bff',
                            primary25: '#d3e2ff',
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
                    placeholder={t('fontPickerPreviewText')}
                />
            </div>
            {fontLoaded && (
                <div style={{ fontFamily: selectedFont, fontSize: '40px', color: '#000', backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>
                    <h3>{t('fontPickerPreviewTitle')}</h3>
                    <p>{previewText}</p>
                </div>
            )}
            <div className="mt-3 mb-3 d-flex flex-column flex-sm-row">
                <button
                    className={`btn btn-primary me-2 ${fontStyle === 'handwriting' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('handwriting')}
                    style={{ marginBottom: '10px' }}
                >
                    {t('handwritingFontsButton')}
                </button>
                <button
                    className={`btn btn-primary ${fontStyle === 'display' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('display')}
                    style={{ marginBottom: '10px' }}
                >
                    {t('displayFontsButton')}
                </button>
            </div>
        </div>
    );
};

export default FontPickerComponent;
