import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {



                home: "Home",
                portfolio: "Portfolio",
                tattooCareInfo: "Tattoo Care",
                appointment: "Book Appointment",
                language: "Language",
                // Додано переклади для AppointmentForm
                appointmentHeader: "Make an Appointment",
                appointmentDescription: "Leave your details and we will contact you for confirmation.",
                appointmentButtonText: "Make an Appointment",
                appointmentModalTitle: "Make an Appointment",
                appointmentNameLabel: "Name",
                appointmentPhoneLabel: "Phone Number",
                appointmentSubmitButton: "Submit",
                appointmentSuccessMessage: "You have successfully made an appointment. We will contact you soon.",
                appointmentErrorMessage: "An error occurred. Please try again.",
                appointmentContactMessage: "Or contact us on Telegram or Instagram",
                appointmentTelegramButton: "Write to Telegram",
                appointmentInstagramButton: "Write to Instagram",

                // Додано переклади для ContactButton
                contactButton: "Contact Me",
                contactModalTitle: "Contact Me",
                contactMethod: "Choose a contact method:",
                contactTelegram: "Telegram",
                contactInstagram: "Instagram",
                closeButton: "Close",

                // Додано переклади для FontPickerComponent
                fontPickerHeader: "Choose the font for your future tattoo",
                fontPickerPlaceholder: "Select a font",
                fontPickerPreviewText: "Enter text",
                fontPickerPreviewTitle: "Preview:",
                handwritingFontsButton: "Handwritten Fonts",
                displayFontsButton: "Display Fonts",

                // Додано переклади для загальних повідомлень
                errorMessage: "Something went wrong. Please try again later.",
                successMessage: "Your request has been successfully submitted.",
                contactSupport: "If you need further assistance, contact support.",


                slider: {
                    firstSlideTitle: "Ideas that live on the skin",
                    firstSlideDescription: "From concept to reality – we create art together.",
                    secondSlideTitle: "Your style, your tattoo",
                    secondSlideDescription: "Trust our master to turn your ideas into unique tattoos.",
                    thirdSlideTitle: "Boldly show your character",
                    thirdSlideDescription: "Our master will help you express yourself through tattoos.",
                },
                tattooCare: {
                    title: "Tattoo Care",
                    cardTitle: "Congratulations on your new tattoo",
                    intro: "I hope I managed to do everything as you dreamed! Thank you for choosing me.",
                    careImportance: "Proper care during healing is just as important as the tattooing process itself.",
                    healingFilmTitle: "Healing Film",
                    healingFilm1: "Most likely, I applied a film for you, and your main task is to keep it for 3-4 days. The film protects the tattoo while simulating the top layer of skin. The main healing process happens under it, and nothing else is needed.",
                    healingFilm2: "You can safely take a shower with the film, but avoid hot baths, sports, and anything that makes you sweat.",
                    healingFilm3: "While the film is on your skin, a small amount of lymph and pigment may accumulate under it – this is normal. When you remove it, everything excess will wash away.",
                    healingFilm4: "Sometimes the film may start to peel off or not stick well, especially in hot weather. If the film is peeling but the tattoo is still under it, it's okay. You can even trim that corner; but if the tattoo is visible, remove the film, regardless of the day, and don’t stick it back.",
                    healingFilm5: "During the period with the film, avoid alcohol.",
                    removingFilmTitle: "Removing the Film",
                    removingFilm1: "On the 3rd or 4th day, or when the film comes off on its own, carefully remove the film.",
                    removingFilm2: "Wash the tattoo with water and soap, you can wipe it with chlorhexidine. Dry the tattoo with a clean towel to keep it clean. Then use Bepanthen cream; it’s great for healing.",
                    removingFilm3: "For the first while, use the cream several times a day, at least twice. Wash the tattoo daily, especially after going outside. It’s important that it stays clean, not exposed to friction, and the skin isn’t dry.",
                    removingFilm4: "Don’t rub or scratch the tattoo. I know, sometimes it’s very tempting, but don’t do it. It’s better to apply more cream.",
                    removingFilm5: "After removing the film, also refrain from going to the gym, swimming pool, sauna, open water, and tanning for two weeks.",
                    rememberTitle: "Remember:",
                    remember1: "You cannot perform laser hair removal on the tattoo area, even a small touch can cause a burn.",
                    remember2: "Be sure to protect the tattoo from sunlight with SPF.",
                    remember3: "Don’t forget to send me a photo after it’s healed.",
                    remember4: "If you have any questions or doubts, message me and I’ll gladly respond."
                },
                tattoo_info: {
                    heading: "For those who have already gotten a tattoo with us",
                    description: "It is important to familiarize yourself with the aftercare instructions for your tattoo.",
                    button: "Tattoo care"
                },
                promoVideo: {
                    title: "Promo Video",
                    loading: "Loading...",
                    loadingText: "Loading video...",
                    playPrompt: "Press Play to watch",
                },
                //Location
                locationHeader: "Our Location",
                locationDescription: "You can find us at the following address:",
                locationAddress: "Zhytomyr, Velyka Berdychiivska St., 25, <br /> Ukraine.",
                locationHours: "We are open from Monday to Friday from 9:00 AM to 6:00 PM. Welcome!",
                mapHeader: "Map",

                postsInfoBlockTitle: "More works can be viewed on our Instagram page",
                visitInstagramButtonText: "Visit Instagram",
                postsTitle: "Posts",
                postIdText: "ID",
                photo: "Photo",
                thumbnail: "Thumbnail",
                showMoreButtonText: "Show More",
                footer: {
                    title: "Tattoo Master",
                    name: "Name: Marina Palaieva",
                    phone: "Phone: +38 (067) 415-52-95",
                    socialTitle: "Social Media Contacts",
                    telegram: "Telegram",
                    instagram: "Instagram",
                    tiktok: "TikTok",
                    rights: "© 2024 All rights reserved | Developed by: [Bogdan Mandriychuk]"
                },
            },

        },
        uk: {
            translation: {
                home: "Головна",
                portfolio: "Портфоліо",
                tattooCareInfo: "Догляд за татуюванням",
                appointment: "Запис на сеанс",
                language: "Мова",
                // Додано переклади для AppointmentForm
                appointmentHeader: "Записатися на прийом",
                appointmentDescription: "Залиште свої дані, і ми зв'яжемось з вами для підтвердження запису.",
                appointmentButtonText: "Записатись на сеанс",
                appointmentModalTitle: "Запис на сеанс",
                appointmentNameLabel: "Ім'я",
                appointmentPhoneLabel: "Номер телефону",
                appointmentSubmitButton: "Відправити",
                appointmentSuccessMessage: "Ви успішно записалися на сеанс. Ми скоро зв'яжемось з вами.",
                appointmentErrorMessage: "Сталася помилка. Будь ласка, спробуйте ще раз.",
                appointmentContactMessage: "Або напишіть нам в Telegram чи Instagram",
                appointmentTelegramButton: "Написати в Telegram",
                appointmentInstagramButton: "Написати в Instagram",

                // Додано переклади для ContactButton
                contactButton: "Зв'язатися зі мною",
                contactModalTitle: "Зв'яжіться зі мною",
                contactMethod: "Виберіть спосіб зв'язку:",
                contactTelegram: "Telegram",
                contactInstagram: "Instagram",
                closeButton: "Закрити",

                // Додано переклади для FontPickerComponent
                fontPickerHeader: "Оберіть шрифт майбутнього тату",
                fontPickerPlaceholder: "Оберіть шрифт",
                fontPickerPreviewText: "Введіть текст",
                fontPickerPreviewTitle: "Попередній перегляд:",
                handwritingFontsButton: "Шрифти як від руки",
                displayFontsButton: "Друковані шрифти",

                // Додано переклади для загальних повідомлень
                errorMessage: "Щось пішло не так. Будь ласка, спробуйте ще раз пізніше.",
                successMessage: "Ваша заявка успішно надіслана.",
                contactSupport: "Якщо вам потрібна додаткова допомога, зверніться до підтримки.",

                slider: {
                    firstSlideTitle: "Ідеї, що живуть на шкірі",
                    firstSlideDescription: "Від концепції до реальності – ми разом створюємо мистецтво.",
                    secondSlideTitle: "Твій стиль, твоє тату",
                    secondSlideDescription: "Довірся нашому майстру, який перетворить твої ідеї на унікальні тату.",
                    thirdSlideTitle: "Сміливо покажи свій характер",
                    thirdSlideDescription: "Наш майстер допоможе тобі виразити себе через тату.",
                },
                tattooCare: {
                    title: "Догляд за тату",
                    cardTitle: "Вітаю з новим татуюванням",
                    intro: "Сподіваюся, мені вдалося зробити все так, як ти мріяв/мріяла! Дякую, що обрала мене.",
                    careImportance: "Правильний догляд під час загоєння не менш важливий, ніж і сам процес нанесення тату.",
                    healingFilmTitle: "Плівка для загоєння",
                    healingFilm1: "Швидше за все, я наклеїла тобі плівку, основне твоє завдання – берегти її 3-4 дні. Плівка захищає тату, імітуючи верхній шар шкіри. Основний процес загоєння проходить під нею, і нічого додатково робити не потрібно.",
                    healingFilm2: "З плівкою можна спокійно приймати душ, але варто утриматися від гарячої ванни, спорту та всього, що змушує тебе потіти.",
                    healingFilm3: "Поки плівка на шкірі, під нею може накопичуватися невелика кількість лімфи та пігменту – це нормально. Коли ти знімеш її, все зайве змиється.",
                    healingFilm4: "Іноді плівка може задиратися або погано триматися, особливо в спеку. Якщо плівка задерлася, але тату ще під нею, все окей. Можна навіть обрізати цей куточок, але якщо тату видно, зніми плівку, незалежно від дня, і не наклеюй її назад.",
                    healingFilm5: "На період з плівкою утримайся від алкоголю.",
                    removingFilmTitle: "Зняття плівки",
                    removingFilm1: "На 3-4 день або коли плівка знялася сама, акуратно зніми плівку.",
                    removingFilm2: "Промий тату водою з милом, можна протерти хлоргексидином. Витри тату серветкою, щоб вона залишалася чистою. Далі використовуйте крем Бепантен, він чудово підходить для загоєння.",
                    removingFilm3: "Перший час використовуй крем кілька разів на день, від двох. Щодня промивай тату, особливо після вулиці. Важливо, щоб вона залишалася чистою, не піддавалася тертю, а шкіра не була сухою.",
                    removingFilm4: "Не чеши та не тріть тату. Знаю, іноді хочеться, але не треба. Краще нанеси ще крему.",
                    removingFilm5: "Після зняття плівки утримайся на два тижні від залу, басейну, сауни, відкритої води та засмаги.",
                    rememberTitle: "Пам'ятай:",
                    remember1: "На місці тату не можна робити лазерну епіляцію, навіть маленький дотик може призвести до опіку.",
                    remember2: "Обов'язково захищай тату від сонячних променів SPF.",
                    remember3: "Не забудь надіслати мені фото після загоєння.",
                    remember4: "Якщо є питання чи сумніви, напиши мені і я з радістю відповім."
                },
                tattoo_info: {
                    heading: "Для тих, хто вже зробив у нас татуювання",
                    description: "Важливо ознайомитися з інформацією про догляд за татуюванням.",
                    button: "Догляд за тату"
                },
                promoVideo: {
                    title: "Промо відео",
                    loading: "Завантаження...",
                    loadingText: "Завантаження відео...",
                    playPrompt: "Для перегляду натисніть Play",
                },
                locationHeader: "Наше Місцезнаходження",
                locationDescription: "Ви можете знайти нас за адресою:",
                locationAddress: "Житомир, вул. Велика Бердичівська, 25, <br /> Україна.",
                locationHours: "Ми відкриті з понеділка по п'ятницю з 9:00 до 18:00. Ласкаво просимо!",
                mapHeader: "Карта",

                postsInfoBlockTitle: "Більше робіт можна переглянути на нашій сторінці в Instagram",
                visitInstagramButtonText: "Відвідати Instagram",
                postsTitle: "Пости",
                postIdText: "ID",
                photo: "Фото",
                thumbnail: "Прев'ю",
                showMoreButtonText: "Показати більше",
                footer: {
                    title: "Майстер Тату",
                    name: "Ім'я: Марина Палаєва",
                    phone: "Телефон: +38 (067) 415-52-95",
                    socialTitle: "Контакти в соцмережах",
                    telegram: "Telegram",
                    instagram: "Instagram",
                    tiktok: "TikTok",
                    rights: "© 2024 Всі права захищені | Розроблено: [Богдан Мандрійчук]"
                },
            },
        },
        pl: {
            translation: {
                home: "Główna",
                portfolio: "Portfolio",
                tattooCareInfo: "Pielęgnacja tatuażu",
                appointment: "Umów się na wizytę",
                language: "Język",
                // Додано переклади для AppointmentForm
                appointmentHeader: "Umów się na wizytę",
                appointmentDescription: "Zostaw swoje dane, a my skontaktujemy się z Tobą, aby potwierdzić rezerwację.",
                appointmentButtonText: "Umów się na wizytę",
                appointmentModalTitle: "Umów się na wizytę",
                appointmentNameLabel: "Imię",
                appointmentPhoneLabel: "Numer telefonu",
                appointmentSubmitButton: "Wyślij",
                appointmentSuccessMessage: "Udało Ci się umówić wizytę. Skontaktujemy się z Tobą wkrótce.",
                appointmentErrorMessage: "Wystąpił błąd. Proszę spróbować ponownie.",
                appointmentContactMessage: "Lub napisz do nas na Telegramie lub Instagramie",
                appointmentTelegramButton: "Napisz do Telegramu",
                appointmentInstagramButton: "Napisz do Instagrama",

                // Додано переклади для ContactButton
                contactButton: "Skontaktuj się ze mną",
                contactModalTitle: "Skontaktuj się ze mną",
                contactMethod: "Wybierz metodę kontaktu:",
                contactTelegram: "Telegram",
                contactInstagram: "Instagram",
                closeButton: "Zamknij",
                promoVideo: {
                    title: "Wideo promocyjne",
                    loading: "Ładowanie...",
                    loadingText: "Ładowanie wideo...",
                    playPrompt: "Naciśnij Play, aby obejrzeć",
                },
                // Додано переклади для FontPickerComponent
                fontPickerHeader: "Wybierz czcionkę dla swojego przyszłego tatuażu",
                fontPickerPlaceholder: "Wybierz czcionkę",
                fontPickerPreviewText: "Wprowadź tekst",
                fontPickerPreviewTitle: "Podgląd:",
                handwritingFontsButton: "Czcionki odręczne",
                displayFontsButton: "Czcionki drukowane",

                // Додано переклади для загальних повідомлень
                errorMessage: "Coś poszło nie tak. Proszę spróbować ponownie później.",
                successMessage: "Twoje zgłoszenie zostało pomyślnie wysłane.",
                contactSupport: "Jeśli potrzebujesz dalszej pomocy, skontaktuj się z obsługą klienta.",

                slider: {
                    firstSlideTitle: "Pomysły, które żyją na skórze",
                    firstSlideDescription: "Od koncepcji do rzeczywistości – tworzymy sztukę razem.",
                    secondSlideTitle: "Twój styl, twoje tatuaże",
                    secondSlideDescription: "Zaufaj naszemu mistrzowi, który zamieni twoje pomysły w unikalne tatuaże.",
                    thirdSlideTitle: "Śmiało pokaż swój charakter",
                    thirdSlideDescription: "Nasz mistrz pomoże ci wyrazić siebie przez tatuaże.",
                },
                tattooCare: {
                    title: "Pielęgnacja tatuażu",
                    cardTitle: "Gratulacje z okazji nowego tatuażu",
                    intro: "Mam nadzieję, że udało mi się zrobić wszystko tak, jak marzyłeś/marzyłaś! Dziękuję, że mnie wybrałeś/aś.",
                    careImportance: "Odpowiednia pielęgnacja podczas gojenia jest równie ważna jak sam proces tatuowania.",
                    healingFilmTitle: "Film na gojenie",
                    healingFilm1: "Najprawdopodobniej założyłem/założyłam Ci folię, a Twoim głównym zadaniem jest jej noszenie przez 3-4 dni. Folia chroni tatuaż, jednocześnie naśladując górną warstwę skóry. Cały proces gojenia odbywa się pod nią, więc nie musisz niczego więcej robić.",
                    healingFilm2: "Z folią można spokojnie brać prysznic, ale należy unikać gorących kąpieli, sportu i wszystkiego, co powoduje pocenie się.",
                    healingFilm3: "Podczas gdy folia jest na skórze, może zbierać się pod nią mała ilość limfy i pigmentu – to normalne. Po jej zdjęciu wszystko nadmiarowe zostanie spłukane.",
                    healingFilm4: "Czasami folia może zaczynać się zsuwać lub nie trzymać dobrze, szczególnie w upalne dni. Jeśli folia się zsuwa, ale tatuaż jest nadal pod nią, wszystko jest w porządku. Możesz nawet przyciąć ten róg, ale jeśli tatuaż jest widoczny, zdejmij folię, niezależnie od dnia, i nie przyklejaj jej z powrotem.",
                    healingFilm5: "Podczas noszenia folii należy unikać alkoholu.",
                    removingFilmTitle: "Zdjęcie folii",
                    removingFilm1: "Po 3-4 dniach lub gdy folia sama zejdzie, ostrożnie zdejmij folię.",
                    removingFilm2: "Opłucz tatuaż wodą z mydłem, możesz go przetrzeć chlorheksydyną. Osusz tatuaż czystym ręcznikiem, aby pozostał czysty. Następnie użyj kremu Bepanthen, który jest świetny do gojenia.",
                    removingFilm3: "Na początku używaj kremu kilka razy dziennie, przynajmniej dwa razy. Codziennie myj tatuaż, szczególnie po wyjściu na zewnątrz. Ważne jest, aby pozostał czysty, nie był narażony na tarcie i nie miał suchej skóry.",
                    removingFilm4: "Nie drap ani nie pocieraj tatuażu. Wiem, czasem kusi, ale nie rób tego. Lepiej nałóż więcej kremu.",
                    removingFilm5: "Po zdjęciu folii unikaj przez dwa tygodnie siłowni, basenu, sauny, otwartej wody i opalania.",
                    rememberTitle: "Pamiętaj:",
                    remember1: "Nie wykonuj depilacji laserowej na miejscu tatuażu, nawet mały dotyk może spowodować oparzenie.",
                    remember2: "Zawsze chroń tatuaż przed promieniowaniem słonecznym z SPF.",
                    remember3: "Nie zapomnij wysłać mi zdjęcia po zagojeniu.",
                    remember4: "Jeśli masz pytania lub wątpliwości, napisz do mnie, a chętnie Ci odpowiem."
                },
                tattoo_info: {
                    heading: "Dla tych, którzy już zrobili u nas tatuaż",
                    description: "Ważne jest, aby zapoznać się z instrukcjami pielęgnacji tatuażu.",
                    button: "Pielęgnacja tatuażu"
                },
                locationHeader: "Nasza lokalizacja",
                locationDescription: "Możesz nas znaleźć pod następującym adresem:",
                locationAddress: "Żytomierz, ul. Welyka Berdyczewska 25, <br /> Ukraina.",
                locationHours: "Jesteśmy otwarci od poniedziałku do piątku w godzinach od 9:00 do 18:00. Zapraszamy!",
                mapHeader: "Mapa",

                postsInfoBlockTitle: "Więcej prac można zobaczyć na naszej stronie Instagram",
                visitInstagramButtonText: "Odwiedź Instagram",
                postsTitle: "Posty",
                postIdText: "ID",
                photo: "Zdjęcie",
                thumbnail: "Miniatura",
                showMoreButtonText: "Pokaż więcej",
                footer: {
                    title: "Mistrz Tatuażu",
                    name: "Imię: Marina Palaieva",
                    phone: "Telefon: +38 (067) 415-52-95",
                    socialTitle: "Kontakt w mediach społecznościowych",
                    telegram: "Telegram",
                    instagram: "Instagram",
                    tiktok: "TikTok",
                    rights: "© 2024 Wszystkie prawa zastrzeżone | Opracowane przez: [Bogdan Mandriychuk]"
                },
            },
        },
    },
    lng: 'uk', // Мова за замовчуванням
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, // Для React це не потрібно
    },
});

export default i18n;
