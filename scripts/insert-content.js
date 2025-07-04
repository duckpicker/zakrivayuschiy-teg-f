const like = `
<svg class="like-icon" width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_1575)">
<path class="contour" d="M12 6H9V9H12V6ZM15 6H12V9H15V6ZM9 9H6V12H9V9ZM9 12H6V15H9V12ZM9 15H6V18H9V15ZM18 6H15V9H18V6ZM12 18H9V21H12V18ZM15 21H12V24H15V21ZM18 24H15V27H18V24ZM27 6H30V9H27V6ZM24 6H27V9H24V6ZM30 9H33V12H30V9ZM30 12H33V15H30V12ZM30 15H33V18H30V15ZM21 6H24V9H21V6ZM27 18H30V21H27V18ZM24 21H27V24H24V21ZM21 24H24V27H21V24ZM21 27H18V30H21V27ZM21 9H18V12H21V9Z" fill="var(--contour-color)"/>
<path class="main-body" d="M12 9H9V12H12V9ZM15 12H12V15H15V12ZM18 9H15V12H18V9ZM12 15H9V18H12V15ZM15 15H12V18H15V15ZM15 18H12V21H15V18ZM18 12H15V15H18V12ZM18 21H15V24H18V21ZM18 18H15V21H18V18ZM27 9H30V12H27V9ZM24 9H27V12H24V9ZM27 12H30V15H27V12ZM24 12H27V15H24V12ZM21 9H24V12H21V9ZM27 15H30V18H27V15ZM24 15H27V18H24V15ZM24 18H27V21H24V18ZM21 12H24V15H21V12ZM21 21H24V24H21V21ZM21 18H24V21H21V18ZM21 21H18V24H21V21ZM21 24H18V27H21V24Z" fill="none"/>
<path class="core" d="M18 15H15V18H18V15ZM21 15H24V18H21V15ZM21 15H18V18H21V15ZM21 12H18V15H21V12ZM21 18H18V21H21V18Z" fill="none"/>
</g>
<path class="sparks" d="M36 13H39V16H36V13ZM27 27H30V30H27V27ZM18 33H21V36H18V33ZM9 27H12V30H9V27ZM24 0H27V3H24V0ZM33 3H36V6H33V3ZM3 3H6V6H3V3ZM12 0H15V3H12V0ZM0 13H3V16H0V13Z" fill="var(--animation-fill-color)"/>
</svg>
`;

const data = [
    {
        title: "Фритрек и нулевой спринт: Подготовка к работе",
        imageSrc: "./images/image1.jpg",
        text: "Это было самое начало пути. На этом этапе важно было проникнуться основами и настроиться на учёбу. И, возможно, подумать, как новые знания могут повлиять на ваше будущее.",
        watermark: "</HTML>",
        footerText: "Очень не хотелось верстать."
    },
    {
        title: "1 спринт: Я — чистый лист",
        imageSrc: "./images/image2.jpg",
        text: "На первых этапах мы работали со страхами и сомнениями, которые часто испытывают новички. Один из них — страх перед чистым листом. Это, конечно же, намного сложнее, чем боязнь куска бумаги. Часто за этим ощущением скрываются более глубокие вопросы: с чего начать? а вдруг будет слишком сложно? что, если я не справлюсь?",
        watermark: "</HTML>",
        footerText: "Пока все настраивали VS Code я устанавливал PHPStorm."
    },
    {
        title: "1 спринт: А если не получится?",
        imageSrc: "./images/image3.jpg",
        text: "Первый проект — позади! Но это всё ещё самое начало пути. Радость могла быстро померкнуть и смениться ожиданием провала. Или вы, наоборот, могли вдохновиться успехами и поверить в себя.",
        watermark: "<css>",
        footerText: "Верстать не так уж и плохо."
    },
    {
        title: "2 спринт: Погоня за идеалом",
        imageSrc: "./images/image4.jpg",
        text: "На этом этапе вы уже достаточно разбирались в основах вёрстки, чтобы понять, как много ещё впереди. Вы могли попытаться погнаться за идеалом и понять, что он недостижим. А, может, вы вовсе и не подвержены перфекционизму и вместо того, чтобы сделать идеально, старались просто сделать.",
        watermark: "<desigions>",
        footerText: "Создай много форм и столько же раз их переделай."
    },
    {
        title: "2 спринт: О тех, кто рядом",
        imageSrc: "./images/image5.jpg",
        text: "Всё это время вы были не одиноки (хотя, возможно, иногда и чувствовали, что одни против целого мира). Вас окружали одногруппники, команда сопровождения и просто близкие люди, которым можно пожаловаться, если очередной макет просто так не поддавался. Осваивать что-то новое легче, когда рядом есть единомышленники, не правда ли?",
        watermark: "care",
        footerText: "npm install, локальный API поднял."
    },
    {
        title: "3 спринт: Обходные стратегии",
        imageSrc: "./images/image6.jpg",
        text: "На этом курсе вы постоянно решали разные задачи. В какой-то момент вам могло показаться, что решения просто иссякли. Значит, пришло время посмотреть на задачу под другим углом.",
        watermark: "<support>",
        footerText: "С наличием переменных верстка мне нравится намного больше."
    },
    {
        title: "3 спринт: Когда опускаются руки",
        imageSrc: "./images/image7.jpg",
        text: "Во время учёбы часто возникает чувство, когда не знаешь, за что хвататься. Вроде и проектную пора сдавать, и задачи хочется порешать, и в теории получше разобраться, и жизнь не забыть пожить. В такие моменты очень нужна концентрация. Вспомните, откуда вы её черпали.",
        watermark: "<lifes-style: none;>",
        footerText: "C template жизнь стала ярче."
    },
    {
        title: "«Сейчас я здесь»",
        imageSrc: "./images/image8.jpg",
        text: "Сейчас вы уже очень много знаете о вёрстке. Но это только начало. Во-первых, впереди ещё много материала про «красотищу». Во-вторых, с окончанием курса учёба не заканчивается. Вёрстка — это целый мир. И этот мир постоянно меняется. Познать его полностью не получится, но это тот случай, когда важен сам процесс познания. Ведь часто путь — и есть результат.",
        watermark: "<experience>",
        footerText: "Ощущаю, что overlay.js был немного лишний."
    }
]

const template = document.getElementById("post-template");
const root = document.querySelector(".template-holder");
const includes = [
    "filter-gold-rain",
    "filter-twitch-friendly",
    "filter-schizo-vision",
    "filter-one-thousand-minus-seven",
    "filter-pov-my-vision",
    "filter-unreal-skin-shader",
    "filter-working-overnight",
    "filter-old-school-cramp"
];
for (let i = includes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [includes[i], includes[j]] = [includes[j], includes[i]];
}

data.slice().reverse().forEach((post, i) => {
    const clone = template.content.cloneNode(true);
    const postElement = clone.querySelector(".post");

    const a = b => postElement.querySelector(`.${b}`);

    a("post__title").innerHTML = post.title;
    a("post__watermark").textContent = post.watermark;
    a("post__image").src = post.imageSrc;
    a("post__image").classList.add(includes[i]);
    const textElement = a("post__text").cloneNode(true);
    a("post__text").innerHTML = post.text;
    textElement.innerHTML = post.footerText;
    a("post__text").after(textElement);
    a("post__icon-button").innerHTML = like;

    root.after(clone);
});

template.remove();
root.remove();