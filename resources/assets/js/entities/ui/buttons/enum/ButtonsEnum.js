//Enum creation ---------------------------------------------------------------

/**
 * Buttons enumeration creation.
 */
let enumeration = {

    /**
     * Counts number of registered buttons in the class.
     * @type {number}
     * @memberOf enumeration
     * @name enumeration#buttonCounter
     */
    buttonCounter: 1,

    /**
     *  Home page button description.
     * @type {{ID: number, NAME: {EN: string, RU: string, SL: string}}}
     */
    HOME: Object.freeze({
        ID: this.buttonCounter++,
        NAME: Object.freeze({
            EN: "Home",
            RU: "На главную",
            SL: "Domov"
        })
    }),

    /**
     *  Price page button description.
     * @type {{ID: number, NAME: {EN: string, RU: string, SL: string}}}
     */
    PRICE: Object.freeze({
        ID: this.buttonCounter++,
        NAME: Object.freeze({
            EN: "Price",
            RU: "Цены",
            SL: "Ceny"
        })
    }),

    /**
     *  Order page button description.
     * @type {{ID: number, NAME: {EN: string, RU: string, SL: string}}}
     */
    ORDER: Object.freeze({
        ID: this.buttonCounter++,
        NAME: Object.freeze({
            EN: "Order",
            RU: "Заказать",
            SL: "Objednať"
        })
    }),

    /**
     *  Contact page button description.
     * @type {{ID: number, NAME: {EN: string, RU: string, SL: string}}}
     */
    CONTACT: Object.freeze({
        ID: this.buttonCounter++,
        NAME: Object.freeze({
            EN: "Address",
            RU: "Адресс",
            SL: "Adresa"
        })
    }),

    /**
     *  Vacancies page button description.
     * @type {{ID: number, NAME: {EN: string, RU: string, SL: string}}}
     */
    VACANCIES: Object.freeze({
        ID: this.buttonCounter++,
        NAME: Object.freeze({
            EN: "Vacancies",
            RU: "Вакансии",
            SL: "Jobs"
        })
    }),

    /**
     *  Facebook redirect button description.
     * @type {{ID: number, NAME: {EN: string, RU: string, SL: string}}}
     */
    FB_GROUP: Object.freeze({
        ID: this.buttonCounter++,
        NAME: Object.freeze({
            EN: "Мы в Facebook",
            RU: "Group on Facebook",
            SL: "Skupina na Facebooku"
        })
    }),

    /**
     *  Facebook "share" button description.
     * @type {{ID: number, NAME: {EN: string, RU: string, SL: string}}}
     */
    FB_SHARE: Object.freeze({
        ID: this.buttonCounter++,
        NAME: Object.freeze({
            EN: "Поделиться",
            RU: "Share",
            SL: "Podeliť sa"
        })
    }),

    /**
     *  Instagram redirect button description.
     * @type {{ID: number, NAME: {EN: string, RU: string, SL: string}}}
     */
    IN_GROUP: Object.freeze({
        ID: this.buttonCounter++,
        NAME: Object.freeze({
            EN: "Мы в Instagram",
            RU: "We on Instagram",
            SL: "My v Instagram"
        })
    }),
};

/**
 * Buttons enum instance with froze properties.
 * @type {Object}
 */
const ButtonsEnum = Object.freeze(enumeration);

export {ButtonsEnum}