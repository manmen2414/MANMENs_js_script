class BioBuilder {
    name = "";
    descriptions = [];
    favorites = [];
    socialLinks = [];

    constructor() { }
    /** 自分の名前を設定します。 @param {string} name 名前  */
    setName(name) {
        this.name = name;
        return this;
    }
    /** 説明を追加します。 @param {string} description 説明 */
    addDescription(description) {
        this.descriptions.push(description);
        return this;
    }
    /** 好きなことを追加できます。 @param {FavoriteBuilder} favorite 好きなこと */
    addFavorite(favorite) {
        this.favorites.push(favorite);
        return this;
    }

    /** SNSのリンクを追加できます。 @param {string} link SNS名 : URLがテンプレートです。 */
    addSocialLink(link) {
        this.socialLinks.push(link);
        return this;
    }

    /**自己紹介をstringにします。 */
    toString() {
        let str = "";
        if (!(!this.name))
            str += `名前 : ${this.name}\r\n`;
        if (this.descriptions.length == 0) str += "説明 : なし\r\n";
        else {
            this.descriptions.forEach(element => {
                str += `・${element}\r\n`;
            });
        }
        if (this.favorites.length == 0) str += "好きなこと : なし\r\n";
        else {
            str += "好きなこと : \r\n";
            this.favorites.forEach(element => {
                str += `・${element.toString()}\r\n`;
            });
        }
        if (this.socialLinks.length == 0) str += "SNS : なし\r\n";
        else {
            str += "SNS : \r\n";
            this.socialLinks.forEach(element => {
                str += `・${element}\r\n`;
            });
        }
        str += "よろしくお願いいたします。";
        return str;
    }
}

class FavoriteBuilder {
    name = "";
    descriptions = [];
    types = [];

    constructor() { }
    /**好きなことの名前を設定します。 @param {string} name 好きなことの名前 */
    setName(name) {
        this.name = name;
        return this;
    }
    /**好きなことへの説明を追加できます。 @param {string} description 説明 */
    addDescription(description) {
        this.descriptions.push(description);
        return this;
    }
    /**遊ぶ、作るなどどのように楽しむかを追加できます。 @param {string} Type */
    addType(Type) {
        this.types.push(Type)
        return this;
    }

    /**好きなことの説明をstringにします。 */
    toString() {
        let str = "";
        if (this.types.length == 0) str += this.name + "\r\n";
        else {
            str += this.name + "を";
            for (let i = 0; i < this.types.length; i++) {
                str += `${this.types[i]}`;
                if (this.types.length != i + 1)
                    str += `、`;
            }
            str += "\r\n"
        }
        if (this.descriptions.length == 0) str += "　説明 : なし";
        else {
            this.descriptions.forEach(element => {
                str += `　・${element}\r\n`;
            });
        }
        return str;
    }
}

/**どのように楽しむか指定します。 */
const FaboriteType = {
    CREATE: "作る",
    PLAY: "遊ぶ"
};


module.exports = {
    BioBuilder, FavoriteBuilder, FaboriteType
};