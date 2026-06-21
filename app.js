// ============================================================
// Математически справочник 8.–12. клас — app.js
// Навигация, данни, търсене, любими, KaTeX рендиране
// ============================================================

'use strict';

// ============================================================
// 1. ДАННИ — пълна структура по класове, теми, подтеми
// ============================================================

const HANDBOOK = {

  // ========== 8. КЛАС ==========
  grade8: {
    label: '8. клас',
    color: '#e84393',
    topics: [
      {
        id: 'g8t1',
        title: 'Основни комбинаторни понятия',
        subtopics: [
          { id: 'g8t1s1', title: 'Правило за събиране на възможности' },
          { id: 'g8t1s2', title: 'Правило за умножение на възможности' },
          { id: 'g8t1s3', title: 'Пермутации' },
          { id: 'g8t1s4', title: 'Вариации' },
          { id: 'g8t1s5', title: 'Комбинации' },
          { id: 'g8t1s6', title: 'Разлика между P, A и C' },
          { id: 'g8t1s7', title: 'Избор на подходяща формула' },
          { id: 'g8t1s8', title: 'Практически задачи' }
        ]
      },
      {
        id: 'g8t2',
        title: 'Вектори',
        subtopics: [
          { id: 'g8t2s1', title: 'Понятие за вектор' },
          { id: 'g8t2s2', title: 'Посока, дължина и големина' },
          { id: 'g8t2s3', title: 'Равни вектори' },
          { id: 'g8t2s4', title: 'Противоположни вектори' },
          { id: 'g8t2s5', title: 'Колинеарни вектори' },
          { id: 'g8t2s6', title: 'Събиране — правило на триъгълника' },
          { id: 'g8t2s7', title: 'Събиране — правило на успоредника' },
          { id: 'g8t2s8', title: 'Изваждане на вектори' },
          { id: 'g8t2s9', title: 'Умножение на вектор с число' },
          { id: 'g8t2s10', title: 'Свойства на операциите с вектори' },
          { id: 'g8t2s11', title: 'Приложения в геометрични задачи' }
        ]
      },
      {
        id: 'g8t3',
        title: 'Триъгълник и трапец',
        subtopics: [
          { id: 'g8t3s1', title: 'Делене на отсечка в дадено отношение' },
          { id: 'g8t3s2', title: 'Средна отсечка в триъгълник' },
          { id: 'g8t3s3', title: 'Свойства на средната отсечка' },
          { id: 'g8t3s4', title: 'Медицентър на триъгълник' },
          { id: 'g8t3s5', title: 'Свойства на медицентъра' },
          { id: 'g8t3s6', title: 'Трапец' },
          { id: 'g8t3s7', title: 'Равнобедрен трапец' },
          { id: 'g8t3s8', title: 'Средна отсечка на трапец' },
          { id: 'g8t3s9', title: 'Задачи за доказване и пресмятане' }
        ]
      },
      {
        id: 'g8t4',
        title: 'Квадратен корен',
        subtopics: [
          { id: 'g8t4s1', title: 'Ирационални числа' },
          { id: 'g8t4s2', title: 'Квадратен корен — определение' },
          { id: 'g8t4s3', title: 'Аритметичен квадратен корен' },
          { id: 'g8t4s4', title: 'Свойства на квадратните корени' },
          { id: 'g8t4s5', title: 'Действия с квадратни корени' },
          { id: 'g8t4s6', title: 'Внасяне на множител под корен' },
          { id: 'g8t4s7', title: 'Изнасяне на множител пред корен' },
          { id: 'g8t4s8', title: 'Сравняване на ирационални числа' },
          { id: 'g8t4s9', title: 'Рационализиране на знаменател' },
          { id: 'g8t4s10', title: 'Чести грешки при работа с радикали' }
        ]
      },
      {
        id: 'g8t5',
        title: 'Квадратни уравнения',
        subtopics: [
          { id: 'g8t5s1', title: 'Квадратно уравнение — определение' },
          { id: 'g8t5s2', title: 'Пълно квадратно уравнение' },
          { id: 'g8t5s3', title: 'Непълни квадратни уравнения' },
          { id: 'g8t5s4', title: 'Формула за корените' },
          { id: 'g8t5s5', title: 'Дискриминанта' },
          { id: 'g8t5s6', title: 'Брой корени и дискриминанта' },
          { id: 'g8t5s7', title: 'Биквадратни уравнения' },
          { id: 'g8t5s8', title: 'Формули на Виет' },
          { id: 'g8t5s9', title: 'Приложения на формулите на Виет' },
          { id: 'g8t5s10', title: 'Моделиране с квадратни уравнения' }
        ]
      },
      {
        id: 'g8t6',
        title: 'Окръжност',
        subtopics: [
          { id: 'g8t6s1', title: 'Окръжност и кръг — основни понятия' },
          { id: 'g8t6s2', title: 'Взаимно положение: точка и окръжност' },
          { id: 'g8t6s3', title: 'Взаимно положение: права и окръжност' },
          { id: 'g8t6s4', title: 'Допирателна към окръжност' },
          { id: 'g8t6s5', title: 'Централни ъгли и дъги' },
          { id: 'g8t6s6', title: 'Вписан ъгъл' },
          { id: 'g8t6s7', title: 'Периферен ъгъл' },
          { id: 'g8t6s8', title: 'Ъгъл с връх вътре в окръжността' },
          { id: 'g8t6s9', title: 'Ъгъл с връх вън от окръжността' },
          { id: 'g8t6s10', title: 'Взаимно положение на две окръжности' }
        ]
      },
      {
        id: 'g8t7',
        title: 'Рационални изрази',
        subtopics: [
          { id: 'g8t7s1', title: 'Рационална дроб — определение' },
          { id: 'g8t7s2', title: 'Дефиниционно множество' },
          { id: 'g8t7s3', title: 'Основно свойство на рационалните дроби' },
          { id: 'g8t7s4', title: 'Съкращаване и разширяване' },
          { id: 'g8t7s5', title: 'Събиране и изваждане' },
          { id: 'g8t7s6', title: 'Умножение и деление' },
          { id: 'g8t7s7', title: 'Преобразуване на рационални изрази' },
          { id: 'g8t7s8', title: 'Дробни уравнения' },
          { id: 'g8t7s9', title: 'Моделиране с дробни уравнения' }
        ]
      },
      {
        id: 'g8t8',
        title: 'Вписани и описани многоъгълници',
        subtopics: [
          { id: 'g8t8s1', title: 'Описана окръжност около триъгълник' },
          { id: 'g8t8s2', title: 'Вписана окръжност в триъгълник' },
          { id: 'g8t8s3', title: 'Ортоцентър' },
          { id: 'g8t8s4', title: 'Забележителни точки в триъгълника' },
          { id: 'g8t8s5', title: 'Вписан четириъгълник' },
          { id: 'g8t8s6', title: 'Описан четириъгълник' }
        ]
      }
    ]
  },

  // ========== 9. КЛАС ==========
  grade9: {
    label: '9. клас',
    color: '#f07020',
    topics: [
      {
        id: 'g9t1',
        title: 'Класическа вероятност',
        subtopics: [
          { id: 'g9t1s1', title: 'Множества и операции' },
          { id: 'g9t1s2', title: 'Случайни и елементарни събития' },
          { id: 'g9t1s3', title: 'Класическа вероятност' },
          { id: 'g9t1s4', title: 'Вероятност на сума на несъвместими събития' },
          { id: 'g9t1s5', title: 'Вероятност на противоположно събитие' },
          { id: 'g9t1s6', title: 'Обединение, сечение, разлика' },
          { id: 'g9t1s7', title: 'Вероятност на съвместими събития' },
          { id: 'g9t1s8', title: 'Практически модели' }
        ]
      },
      {
        id: 'g9t2',
        title: 'Функции',
        subtopics: [
          { id: 'g9t2s1', title: 'Понятие за функция' },
          { id: 'g9t2s2', title: 'Дефиниционно множество и обхват' },
          { id: 'g9t2s3', title: 'Линейна функция' },
          { id: 'g9t2s4', title: 'Свойства на линейната функция' },
          { id: 'g9t2s5', title: 'Квадратна функция y = ax²' },
          { id: 'g9t2s6', title: 'Квадратна функция y = ax² + bx + c' },
          { id: 'g9t2s7', title: 'Връх и ос на симетрия на парабола' },
          { id: 'g9t2s8', title: 'Растене, намаляване, екстремум' },
          { id: 'g9t2s9', title: 'Пресечни точки с осите' }
        ]
      },
      {
        id: 'g9t3',
        title: 'Системи линейни уравнения',
        subtopics: [
          { id: 'g9t3s1', title: 'Линейно уравнение с две неизвестни' },
          { id: 'g9t3s2', title: 'Система линейни уравнения' },
          { id: 'g9t3s3', title: 'Решаване чрез заместване' },
          { id: 'g9t3s4', title: 'Решаване чрез събиране' },
          { id: 'g9t3s5', title: 'Графично решаване' },
          { id: 'g9t3s6', title: 'Брой решения на система' },
          { id: 'g9t3s7', title: 'Моделиране' }
        ]
      },
      {
        id: 'g9t4',
        title: 'Системи уравнения от втора степен',
        subtopics: [
          { id: 'g9t4s1', title: 'Системи с едно уравнение от 1. степен' },
          { id: 'g9t4s2', title: 'Системи с две уравнения от 2. степен' },
          { id: 'g9t4s3', title: 'Решаване чрез заместване' },
          { id: 'g9t4s4', title: 'Решаване чрез събиране и полагане' },
          { id: 'g9t4s5', title: 'Геометрична интерпретация' },
          { id: 'g9t4s6', title: 'Моделиране' }
        ]
      },
      {
        id: 'g9t5',
        title: 'Подобни триъгълници',
        subtopics: [
          { id: 'g9t5s1', title: 'Пропорционални отсечки' },
          { id: 'g9t5s2', title: 'Теорема на Талес' },
          { id: 'g9t5s3', title: 'Подобни триъгълници — определение' },
          { id: 'g9t5s4', title: 'Признаци за подобност (1., 2., 3.)' },
          { id: 'g9t5s5', title: 'Отношение на страни, периметри, лица' }
        ]
      },
      {
        id: 'g9t6',
        title: 'Рационални неравенства',
        subtopics: [
          { id: 'g9t6s1', title: 'Числови интервали' },
          { id: 'g9t6s2', title: 'Системи линейни неравенства' },
          { id: 'g9t6s3', title: 'Квадратни неравенства' },
          { id: 'g9t6s4', title: 'Метод на интервалите' },
          { id: 'g9t6s5', title: 'Дробни неравенства' },
          { id: 'g9t6s6', title: 'Неравенства от по-висока степен' }
        ]
      },
      {
        id: 'g9t7',
        title: 'Метрични зависимости',
        subtopics: [
          { id: 'g9t7s1', title: 'Метрични зависимости в правоъгълен триъгълник' },
          { id: 'g9t7s2', title: 'Катетова и височинна теорема' },
          { id: 'g9t7s3', title: 'Теорема на Питагор' },
          { id: 'g9t7s4', title: 'Дължина на отсечка в координатна система' },
          { id: 'g9t7s5', title: 'Решаване на геометрични фигури' },
          { id: 'g9t7s6', title: 'Метрични зависимости в окръжност' }
        ]
      },
      {
        id: 'g9t8',
        title: 'Тригонометрични функции на остър ъгъл',
        subtopics: [
          { id: 'g9t8s1', title: 'Синус, косинус, тангенс, котангенс' },
          { id: 'g9t8s2', title: 'Стойности за 30°, 45°, 60°' },
          { id: 'g9t8s3', title: 'Основни тригонометрични зависимости' },
          { id: 'g9t8s4', title: 'Функции на допълнителни ъгли' },
          { id: 'g9t8s5', title: 'Намиране на елементи в триъгълник' },
          { id: 'g9t8s6', title: 'Практически задачи' }
        ]
      }
    ]
  },

  // ========== 10. КЛАС ==========
  grade10: {
    label: '10. клас',
    color: '#10b981',
    topics: [
      {
        id: 'g10t1',
        title: 'Ирационални изрази и уравнения',
        subtopics: [
          { id: 'g10t1s1', title: 'Ирационален израз — ДМ' },
          { id: 'g10t1s2', title: 'Преобразуване на ирационални изрази' },
          { id: 'g10t1s3', title: 'Ирационални уравнения с един корен' },
          { id: 'g10t1s4', title: 'Ирационални уравнения с два корена' },
          { id: 'g10t1s5', title: 'Теорема за еквивалентност' },
          { id: 'g10t1s6', title: 'Проверка и чужди корени' }
        ]
      },
      {
        id: 'g10t2',
        title: 'Прогресии',
        subtopics: [
          { id: 'g10t2s1', title: 'Числови редици' },
          { id: 'g10t2s2', title: 'Аритметична прогресия' },
          { id: 'g10t2s3', title: 'Общ член и сбор на АП' },
          { id: 'g10t2s4', title: 'Геометрична прогресия' },
          { id: 'g10t2s5', title: 'Общ член и сбор на ГП' },
          { id: 'g10t2s6', title: 'Проста и сложна лихва' },
          { id: 'g10t2s7', title: 'Практически задачи' }
        ]
      },
      {
        id: 'g10t3',
        title: 'Статистика и обработка на данни',
        subtopics: [
          { id: 'g10t3s1', title: 'Статистически данни и честоти' },
          { id: 'g10t3s2', title: 'Мода и медиана' },
          { id: 'g10t3s3', title: 'Средна аритметична стойност' },
          { id: 'g10t3s4', title: 'Петчислено представяне' },
          { id: 'g10t3s5', title: 'Графично представяне на данни' }
        ]
      },
      {
        id: 'g10t4',
        title: 'Решаване на триъгълник',
        subtopics: [
          { id: 'g10t4s1', title: 'Тригонометрични функции в [0°; 180°]' },
          { id: 'g10t4s2', title: 'Основни тригонометрични тъждества' },
          { id: 'g10t4s3', title: 'Синусова теорема' },
          { id: 'g10t4s4', title: 'Косинусова теорема' },
          { id: 'g10t4s5', title: 'Формули за лице на триъгълник' },
          { id: 'g10t4s6', title: 'Кога се използва коя теорема' }
        ]
      },
      {
        id: 'g10t5',
        title: 'Елементи от стереометрията',
        subtopics: [
          { id: 'g10t5s1', title: 'Прави и равнини в пространството' },
          { id: 'g10t5s2', title: 'Взаимно положение на прави' },
          { id: 'g10t5s3', title: 'Перпендикулярност — права и равнина' },
          { id: 'g10t5s4', title: 'Ъгъл между права и равнина' },
          { id: 'g10t5s5', title: 'Взаимно положение на равнини' },
          { id: 'g10t5s6', title: 'Призма — лице и обем' },
          { id: 'g10t5s7', title: 'Пирамида — лице и обем' },
          { id: 'g10t5s8', title: 'Цилиндър — лице и обем' },
          { id: 'g10t5s9', title: 'Конус — лице и обем' },
          { id: 'g10t5s10', title: 'Сфера и кълбо' }
        ]
      }
    ]
  },

  // ========== 11. КЛАС ==========
  grade11: {
    label: '11. клас',
    color: '#8b5cf6',
    topics: [
      {
        id: 'g11t1',
        title: 'Степен и логаритъм',
        subtopics: [
          { id: 'g11t1s1', title: 'Корен n-ти — свойства' },
          { id: 'g11t1s2', title: 'Степен с рационален показател' },
          { id: 'g11t1s3', title: 'Показателна функция' },
          { id: 'g11t1s4', title: 'Логаритъм — определение' },
          { id: 'g11t1s5', title: 'Основни свойства на логаритмите' },
          { id: 'g11t1s6', title: 'Логаритмична функция' },
          { id: 'g11t1s7', title: 'Формули за логаритъм на произведение, частно, степен' }
        ]
      },
      {
        id: 'g11t2',
        title: 'Решаване на равнинни фигури',
        subtopics: [
          { id: 'g11t2s1', title: 'Успоредник и трапец' },
          { id: 'g11t2s2', title: 'Равнобедрен трапец' },
          { id: 'g11t2s3', title: 'Правилен многоъгълник' },
          { id: 'g11t2s4', title: 'Радиуси на вписани и описани окръжности' },
          { id: 'g11t2s5', title: 'Лица на равнинни фигури' }
        ]
      },
      {
        id: 'g11t3',
        title: 'Тригонометрия',
        subtopics: [
          { id: 'g11t3s1', title: 'Обобщен ъгъл и радиан' },
          { id: 'g11t3s2', title: 'Тригонометрични функции на обобщен ъгъл' },
          { id: 'g11t3s3', title: 'Четност, нечетност, периодичност' },
          { id: 'g11t3s4', title: 'Графики на sin, cos, tg, cotg' },
          { id: 'g11t3s5', title: 'Формули за сбор и разлика' },
          { id: 'g11t3s6', title: 'Формули за удвоен ъгъл' },
          { id: 'g11t3s7', title: 'Формули за сбор/разлика на функции' },
          { id: 'g11t3s8', title: 'Преобразуване на тригонометрични изрази' }
        ]
      },
      {
        id: 'g11t4',
        title: 'Вероятности',
        subtopics: [
          { id: 'g11t4s1', title: 'Условна вероятност' },
          { id: 'g11t4s2', title: 'Теорема за умножение' },
          { id: 'g11t4s3', title: 'Независими събития' },
          { id: 'g11t4s4', title: 'Модели на многократни експерименти' },
          { id: 'g11t4s5', title: 'Геометрична вероятност' }
        ]
      }
    ]
  },

  // ========== 12. КЛАС ==========
  grade12: {
    label: '12. клас',
    color: '#0ea5e9',
    topics: [
      {
        id: 'g12t1',
        title: 'Статистика',
        subtopics: [
          { id: 'g12t1s1', title: 'Групиране на данни и честоти' },
          { id: 'g12t1s2', title: 'Хистограма и полигон' },
          { id: 'g12t1s3', title: 'Акумулирани честоти' },
          { id: 'g12t1s4', title: 'Средна аритметична за групирани данни' },
          { id: 'g12t1s5', title: 'Дисперсия и стандартно отклонение' },
          { id: 'g12t1s6', title: 'Оценяване на дял в генерална съвкупност' }
        ]
      },
      {
        id: 'g12t2',
        title: 'Уравнения',
        subtopics: [
          { id: 'g12t2s1', title: 'Модулни уравнения' },
          { id: 'g12t2s2', title: 'Показателни уравнения' },
          { id: 'g12t2s3', title: 'Логаритмични уравнения' },
          { id: 'g12t2s4', title: 'Тригонометрични уравнения — sin x = a' },
          { id: 'g12t2s5', title: 'Тригонометрични уравнения — cos x = a' },
          { id: 'g12t2s6', title: 'Тригонометрични уравнения — tg x = a' },
          { id: 'g12t2s7', title: 'Тригонометрични уравнения, свеждащи се до квадратни' }
        ]
      },
      {
        id: 'g12t3',
        title: 'Неравенства',
        subtopics: [
          { id: 'g12t3s1', title: 'Модулни неравенства' },
          { id: 'g12t3s2', title: 'Ирационални неравенства' },
          { id: 'g12t3s3', title: 'Показателни неравенства' },
          { id: 'g12t3s4', title: 'Логаритмични неравенства' },
          { id: 'g12t3s5', title: 'Методи чрез полагане' }
        ]
      },
      {
        id: 'g12t4',
        title: 'Екстремални задачи',
        subtopics: [
          { id: 'g12t4s1', title: 'Линейна функция — min и max' },
          { id: 'g12t4s2', title: 'Квадратна функция — min и max' },
          { id: 'g12t4s3', title: 'Основни елементарни неравенства' },
          { id: 'g12t4s4', title: 'Екстремални задачи в алгебрата' },
          { id: 'g12t4s5', title: 'Екстремални задачи в планиметрията' }
        ]
      }
    ]
  }
};

// ============================================================
// 2. ПРИМЕРНО ПОПЪЛНЕНО СЪДЪРЖАНИЕ
// Поне по една подтема за всеки клас
// ============================================================

const CONTENT = {

  // ---- 8. клас: Квадратни уравнения — Формула за корените ----
  g8t5s4: {
    shortIntro: 'Формулата за корените на квадратното уравнение е централният инструмент за намиране на решенията. Тя работи за всяко пълно квадратно уравнение.',
    definitions: [
      { term: 'Квадратно уравнение', def: 'Уравнение от вида <katex>ax^2 + bx + c = 0</katex>, където <katex>a \\neq 0</katex>.' },
      { term: 'Дискриминанта', def: 'Изразът <katex>D = b^2 - 4ac</katex>. Знакът на D определя броя и вида на корените.' }
    ],
    formulas: [
      { label: 'Общa формула за корените', tex: 'x_{1,2} = \\dfrac{-b \\pm \\sqrt{D}}{2a}' },
      { label: 'Съкратена формула (при четно b)', tex: 'x_{1,2} = \\dfrac{-b\' \\pm \\sqrt{D\'}}{a}, \\quad D\' = b\'^2 - ac' },
      { label: 'Дискриминанта', tex: 'D = b^2 - 4ac' }
    ],
    discriminantTable: true,
    algorithm: [
      'Запиши уравнението в стандартен вид: <katex>ax^2 + bx + c = 0</katex>.',
      'Определи коефициентите <katex>a</katex>, <katex>b</katex>, <katex>c</katex>.',
      'Пресметни дискриминантата: <katex>D = b^2 - 4ac</katex>.',
      'Ако <katex>D < 0</katex> — няма реални корени. Спри.',
      'Ако <katex>D \\geq 0</katex> — намери корените по формулата.',
      'Провери с формулите на Виет: <katex>x_1 + x_2 = -b/a</katex>.'
    ],
    example: {
      problem: 'Реши уравнението <katex>2x^2 - 5x + 2 = 0</katex>.',
      solution: '<b>Стъпка 1:</b> a = 2, b = −5, c = 2.<br><b>Стъпка 2:</b> D = (−5)² − 4·2·2 = 25 − 16 = 9 > 0.<br><b>Стъпка 3:</b> <katex>x_{1,2} = \\dfrac{5 \\pm 3}{4}</katex><br><katex>x_1 = 2, \\quad x_2 = \\dfrac{1}{2}</katex><br><b>Проверка (Виет):</b> x₁ + x₂ = 5/2 = −(−5)/2 ✓; x₁·x₂ = 1 = 2/2 ✓'
    },
    mistakes: [
      { label: 'Грешен знак в D', text: 'Дискриминантата е D = b² − 4ac, не b² + 4ac.' },
      { label: 'Деление само на 2', text: 'Знаменателят е 2a, не 2. Ако a ≠ 1, внимавай!' },
      { label: 'Корен от отрицателно', text: 'При D < 0 уравнението няма реални корени — не се опитвай да вземеш корен.' }
    ],
    miniCheck: [
      {
        q: 'Колко реални корена има уравнението x² + x + 1 = 0?',
        options: ['Нула', 'Един', 'Два'],
        correct: 0,
        feedback: 'D = 1 − 4 = −3 < 0, значи няма реални корени.'
      },
      {
        q: 'При D = 0 уравнението има:',
        options: ['Нула корена', 'Два равни корена', 'Два различни корена'],
        correct: 1,
        feedback: 'При D = 0: x₁ = x₂ = −b/(2a) — един двоен корен.'
      }
    ],
    remember: 'D < 0 → няма реални корени | D = 0 → два равни корена | D > 0 → два различни корена. Формулата е <katex>x_{1,2} = \\dfrac{-b \\pm \\sqrt{D}}{2a}</katex>.'
  },

  // ---- 9. клас: Тригонометрични функции — Стойности за 30°, 45°, 60° ----
  g9t8s2: {
    shortIntro: 'Стойностите на тригонометричните функции за специалните ъгли 30°, 45° и 60° трябва да се знаят наизуст — те се използват в почти всяка задача.',
    definitions: [
      { term: 'Специални ъгли', def: 'Ъглите 30°, 45° и 60° се срещат в правоъгълния триъгълник с ъгли 30-60-90 и в равнобедрения правоъгълен триъгълник.' }
    ],
    formulas: [
      { label: 'Основна зависимост', tex: '\\sin^2 \\alpha + \\cos^2 \\alpha = 1' },
      { label: 'Тангенс', tex: '\\operatorname{tg}\\, \\alpha = \\dfrac{\\sin \\alpha}{\\cos \\alpha}' },
      { label: 'Котангенс', tex: '\\operatorname{cotg}\\, \\alpha = \\dfrac{\\cos \\alpha}{\\sin \\alpha}' }
    ],
    trigTable: true,
    algorithm: [
      'Идентифицирай ъгъла в задачата.',
      'Погледни таблицата или я изведи от правоъгълния триъгълник.',
      'Замести директно в формулата.',
      'Опрости, ако е нужно (рационализирай знаменателя).'
    ],
    example: {
      problem: 'В правоъгълен триъгълник хипотенузата е 10 cm, а един ъгъл е 30°. Намери катетите.',
      solution: 'Катетът срещу 30° е: <katex>a = 10 \\cdot \\sin 30° = 10 \\cdot \\dfrac{1}{2} = 5</katex> cm.<br>Катетът срещу 60° е: <katex>b = 10 \\cdot \\cos 30° = 10 \\cdot \\dfrac{\\sqrt{3}}{2} = 5\\sqrt{3}</katex> cm.'
    },
    mistakes: [
      { label: 'Объркване на sin и cos', text: 'sin е съотношение "срещулежащ катет / хипотенуза", cos — "прилежащ / хипотенуза".' },
      { label: 'sin 30° = √3/2', text: 'sin 30° = 1/2, а НЕ √3/2. За 60° е обратното!' }
    ],
    miniCheck: [
      {
        q: 'Колко е cos 60°?',
        options: ['√3/2', '1/2', '√2/2'],
        correct: 1,
        feedback: 'cos 60° = 1/2. Сравни: sin 60° = √3/2.'
      },
      {
        q: 'Колко е tg 45°?',
        options: ['√3', '1', '1/√3'],
        correct: 1,
        feedback: 'tg 45° = sin 45° / cos 45° = (√2/2)/(√2/2) = 1.'
      }
    ],
    remember: 'Запомни реда за sin: 0°→1/2→√2/2→√3/2→1 при ъгли 0°, 30°, 45°, 60°, 90°. За cos е обратният ред.'
  },

  // ---- 10. клас: Прогресии — Аритметична прогресия ----
  g10t2s2: {
    shortIntro: 'Аритметичната прогресия е редица, в която разликата между всеки два последователни члена е константна. Среща се в задачи за лихви, движения и редовни плащания.',
    definitions: [
      { term: 'Аритметична прогресия', def: 'Редица <katex>a_1, a_2, \\ldots, a_n</katex>, в която <katex>a_{n+1} - a_n = d = \\text{const}</katex>.' },
      { term: 'Разлика d', def: 'Константата <katex>d = a_{n+1} - a_n</katex>. Може да е положителна, отрицателна или нула.' }
    ],
    formulas: [
      { label: 'Общ член', tex: 'a_n = a_1 + (n-1)d' },
      { label: 'Сбор на първите n члена', tex: 'S_n = \\dfrac{a_1 + a_n}{2} \\cdot n = \\dfrac{2a_1 + (n-1)d}{2} \\cdot n' },
      { label: 'Свойство на средния член', tex: 'a_k = \\dfrac{a_{k-1} + a_{k+1}}{2}' }
    ],
    algorithm: [
      'Провери дали редицата е АП: изчисли разликата между последователни членове.',
      'Запиши a₁ и d.',
      'Ако търсиш член aₙ — използвай aₙ = a₁ + (n−1)d.',
      'Ако търсиш сбор Sₙ — използвай формулата за Sₙ.',
      'Провери резултата с конкретни стойности.'
    ],
    example: {
      problem: 'Дадена е АП с a₁ = 3 и d = 4. Намери a₁₀ и S₁₀.',
      solution: '<b>Общ член:</b> <katex>a_{10} = 3 + 9 \\cdot 4 = 3 + 36 = 39</katex><br><b>Сбор:</b> <katex>S_{10} = \\dfrac{3 + 39}{2} \\cdot 10 = 21 \\cdot 10 = 210</katex>'
    },
    mistakes: [
      { label: 'n−1 вместо n', text: 'В aₙ = a₁ + (n−1)d броят стъпки е n−1 (не n)! За a₁₀ имаш 9 стъпки.' },
      { label: 'Формулата на Sₙ', text: 'Sₙ = n·(a₁+aₙ)/2 — делиш на 2, защото вземаш средноаритметично.' }
    ],
    miniCheck: [
      {
        q: 'В АП: a₁ = 5, d = 3. Кой е a₅?',
        options: ['17', '20', '15'],
        correct: 0,
        feedback: 'a₅ = 5 + 4·3 = 5 + 12 = 17.'
      }
    ],
    remember: 'АП: <katex>a_n = a_1 + (n-1)d</katex>. Сборът е брой членове × средния член: <katex>S_n = n \\cdot \\dfrac{a_1 + a_n}{2}</katex>.'
  },

  // ---- 11. клас: Логаритъм — Основни свойства ----
  g11t1s5: {
    shortIntro: 'Свойствата на логаритмите позволяват да преобразуваме сложни логаритмични изрази в по-прости. Те са основата за решаване на показателни и логаритмични уравнения.',
    definitions: [
      { term: 'Логаритъм', def: '<katex>\\log_a b = c \\Leftrightarrow a^c = b</katex>, където <katex>a > 0, a \\neq 1, b > 0</katex>.' },
      { term: 'Десетичен логаритъм', def: '<katex>\\lg b = \\log_{10} b</katex>' },
      { term: 'Натурален логаритъм', def: '<katex>\\ln b = \\log_e b</katex>' }
    ],
    formulas: [
      { label: 'Логаритъм на произведение', tex: '\\log_a(mn) = \\log_a m + \\log_a n' },
      { label: 'Логаритъм на частно', tex: '\\log_a\\dfrac{m}{n} = \\log_a m - \\log_a n' },
      { label: 'Логаритъм на степен', tex: '\\log_a m^k = k \\cdot \\log_a m' },
      { label: 'Формула за смяна на основата', tex: '\\log_a b = \\dfrac{\\lg b}{\\lg a} = \\dfrac{\\ln b}{\\ln a}' },
      { label: 'Специални стойности', tex: '\\log_a 1 = 0; \\quad \\log_a a = 1' }
    ],
    algorithm: [
      'Идентифицирай дали логаритмите имат еднаква основа.',
      'Ако не — смени основата с формулата за смяна.',
      'Приложи свойствата: произведение → събиране, степен → умножение.',
      'Провери дали аргументите на логаритмите са положителни (ДМ).',
      'Опрости крайния израз.'
    ],
    example: {
      problem: 'Пресметни: <katex>\\log_2 3 + \\log_2 8 - \\log_2 12</katex>',
      solution: '<katex>\\log_2 3 + \\log_2 8 - \\log_2 12 = \\log_2 \\dfrac{3 \\cdot 8}{12} = \\log_2 2 = 1</katex>'
    },
    mistakes: [
      { label: 'Логаритъм на сбор', text: 'log(a+b) ≠ log a + log b ! Свойството е само за произведение.' },
      { label: 'Отрицателен аргумент', text: 'log(−3) е невъзможен! Аргументът на логаритъм трябва да е строго положителен.' }
    ],
    miniCheck: [
      {
        q: 'Колко е log₂(16)?',
        options: ['2', '4', '8'],
        correct: 1,
        feedback: 'log₂(16) = log₂(2⁴) = 4.'
      },
      {
        q: 'log₃(9) + log₃(3) = ?',
        options: ['3', '5', '6'],
        correct: 0,
        feedback: 'log₃(9) = 2, log₃(3) = 1, сборът е 3.'
      }
    ],
    remember: '<katex>\\log_a(mn) = \\log_a m + \\log_a n</katex> | <katex>\\log_a m^k = k\\log_a m</katex> | Аргументът трябва да е > 0!'
  },

  // ---- 12. клас: Показателни уравнения ----
  g12t2s2: {
    shortIntro: 'Показателните уравнения съдържат неизвестното в показателя на степента. Основният метод е свеждане до основа: изразяваме двете страни като степени с еднаква основа.',
    definitions: [
      { term: 'Показателно уравнение', def: 'Уравнение от вида <katex>a^{f(x)} = a^{g(x)}</katex>, или уравнение, в което неизвестното се съдържа в показателя.' }
    ],
    formulas: [
      { label: 'Основно свойство', tex: 'a^{f(x)} = a^{g(x)} \\Leftrightarrow f(x) = g(x), \\quad a > 0, a \\neq 1' },
      { label: 'С полагане t = aˣ', tex: 't = a^x, \\; t > 0' }
    ],
    algorithm: [
      'Провери дали двете страни могат да се запишат като степени с еднаква основа.',
      'Ако да — приравни показателите и реши получения израз.',
      'Ако не — провери дали е подходящо полагане (напр. t = 2ˣ).',
      'При полагане реши получeното уравнение спрямо t.',
      'Намери x от t = aˣ (логаритмувай, ако е нужно).',
      'Провери: t трябва да е > 0.'
    ],
    example: {
      problem: 'Реши: <katex>4^x - 5 \\cdot 2^x + 4 = 0</katex>',
      solution: '<b>Полагане:</b> <katex>t = 2^x, \\; t > 0</katex><br><katex>4^x = (2^2)^x = (2^x)^2 = t^2</katex><br>Уравнението става: <katex>t^2 - 5t + 4 = 0</katex><br>Корени: <katex>t_1 = 1, \\; t_2 = 4</katex><br><b>Обратно:</b> <katex>2^x = 1 \\Rightarrow x = 0</katex> и <katex>2^x = 4 \\Rightarrow x = 2</katex>'
    },
    mistakes: [
      { label: 'Различни основи', text: 'При 6ˣ = 2ˣ·3ˣ — не можем директно да приравним показателите, защото основите са различни.' },
      { label: 'Отрицателно t', text: 'При полагане t = aˣ — t > 0 винаги! Ако получиш t = −2, отхвърляй.' }
    ],
    miniCheck: [
      {
        q: 'Реши: 2ˣ = 8',
        options: ['x = 2', 'x = 3', 'x = 4'],
        correct: 1,
        feedback: '8 = 2³, значи x = 3.'
      },
      {
        q: 'Кой е методът при 4ˣ − 3·2ˣ − 4 = 0?',
        options: ['Логаритмуване', 'Полагане t = 2ˣ', 'Свеждане до основа'],
        correct: 1,
        feedback: 'Полагаме t = 2ˣ и получаваме квадратно уравнение.'
      }
    ],
    remember: 'Основен метод: свеждане до обща основа → приравняване на показателите. При сложни — полагане <katex>t = a^x, t > 0</katex>.'
  }
};

// ============================================================
// 3. ИНДЕКС ЗА ТЪРСЕНЕ (строи се автоматично)
// ============================================================

let searchIndex = [];

function buildSearchIndex() {
  searchIndex = [];
  const gradeKeys = Object.keys(HANDBOOK);
  gradeKeys.forEach(gKey => {
    const grade = HANDBOOK[gKey];
    grade.topics.forEach((topic, ti) => {
      topic.subtopics.forEach((sub, si) => {
        searchIndex.push({
          gradeKey: gKey,
          gradeLabel: grade.label,
          topicTitle: topic.title,
          topicId: topic.id,
          subtopicTitle: sub.title,
          subtopicId: sub.id,
          searchText: (grade.label + ' ' + topic.title + ' ' + sub.title).toLowerCase()
        });
      });
    });
  });
}

// ============================================================
// 4. ЛЮБИМИ (localStorage)
// ============================================================

const FAV_KEY = 'mathhandbook_favorites';

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
  } catch { return []; }
}

function toggleFavorite(subtopicId) {
  let favs = getFavorites();
  const idx = favs.indexOf(subtopicId);
  if (idx === -1) {
    favs.push(subtopicId);
  } else {
    favs.splice(idx, 1);
  }
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  return idx === -1; // true = добавено
}

function isFavorite(subtopicId) {
  return getFavorites().includes(subtopicId);
}

// ============================================================
// 5. НАВИГАЦИОННО СЪСТОЯНИЕ
// ============================================================

const state = {
  view: 'home',       // 'home' | 'grade' | 'topic' | 'subtopic' | 'favorites'
  gradeKey: null,
  topicId: null,
  subtopicId: null,
  searchQuery: ''
};

// ============================================================
// 6. РЕНДИРАНЕ НА ИНТЕРФЕЙСА
// ============================================================

function renderApp() {
  updateBreadcrumb();

  // Търсачката се показва само на началната страница
  const searchArea = document.getElementById('search-area');
  if (searchArea) {
    searchArea.style.display = (state.view === 'home') ? 'block' : 'none';
  }

  const main = document.getElementById('main-content');
  if (!main) return;
  main.innerHTML = '';
  main.className = 'main-content page-enter';

  switch (state.view) {
    case 'home':      renderHome(main);      break;
    case 'grade':     renderGrade(main);     break;
    case 'topic':     renderTopic(main);     break;
    case 'subtopic':  renderSubtopic(main);  break;
    case 'favorites': renderFavorites(main); break;
  }

  setTimeout(renderKaTeX, 50);
}

// --- Начална страница ---
function renderHome(main) {
  const grades = [
    { key: 'grade8',  num: '8',  topics: HANDBOOK.grade8.topics.length },
    { key: 'grade9',  num: '9',  topics: HANDBOOK.grade9.topics.length },
    { key: 'grade10', num: '10', topics: HANDBOOK.grade10.topics.length },
    { key: 'grade11', num: '11', topics: HANDBOOK.grade11.topics.length },
    { key: 'grade12', num: '12', topics: HANDBOOK.grade12.topics.length }
  ];

  let html = `
    <div class="home-hero">
      <h1>Математически справочник<br>8.–12. клас</h1>
      <p>Формули, теореми, чертежи, графики и типови задачи</p>
    </div>

    <div class="hint-box">
      <strong>Как да използвам справочника?</strong><br>
      Избери клас → тема → подтема. Всяка подтема съдържа определения, формули, алгоритъм, типова задача и мини проверка. Формулите могат да се копират с бутона 📋.
    </div>

    <div class="section-title">Избери клас</div>
    <div class="grade-grid">
  `;

  grades.forEach(g => {
    html += `
      <div class="grade-card" data-grade="${g.num}" onclick="goToGrade('${g.key}')">
        <div class="grade-num">${g.num}.</div>
        <div class="grade-label">клас</div>
        <div class="grade-topics">${g.topics} теми</div>
      </div>
    `;
  });

  html += `</div>`;
  main.innerHTML = html;
}

// --- Страница на клас ---
function renderGrade(main) {
  const grade = HANDBOOK[state.gradeKey];
  if (!grade) return;

  const gradeNum = state.gradeKey.replace('grade', '');
  let html = `<div class="section-title grade-${gradeNum}">${grade.label} — Теми</div>
              <div class="topic-list grade-${gradeNum}">`;

  grade.topics.forEach((topic, i) => {
    html += `
      <div class="topic-card" onclick="goToTopic('${topic.id}')">
        <div class="topic-num">${i + 1}</div>
        <div class="topic-info">
          <div class="topic-name">${topic.title}</div>
          <div class="topic-sub-count">${topic.subtopics.length} подтеми</div>
        </div>
        <div class="topic-arrow">›</div>
      </div>
    `;
  });

  html += `</div>`;
  main.innerHTML = html;
}

// --- Страница на тема (списък подтеми) ---
function renderTopic(main) {
  const topic = findTopic(state.topicId);
  if (!topic) return;

  const gradeNum = state.gradeKey.replace('grade', '');
  let html = `<div class="section-title">Подтеми</div>
              <div class="subtopic-list grade-${gradeNum}">`;

  topic.subtopics.forEach(sub => {
    const hasFull = !!CONTENT[sub.id];
    html += `
      <div class="subtopic-item" onclick="goToSubtopic('${sub.id}')">
        <div class="subtopic-dot"></div>
        <div class="subtopic-name">${sub.title}</div>
        ${hasFull ? '<span style="font-size:11px;color:var(--grade10);font-weight:600;">✓</span>' : ''}
        <div style="color:var(--text-muted);font-size:16px;">›</div>
      </div>
    `;
  });

  html += `</div>`;
  main.innerHTML = html;
}

// --- Съдържание на подтема ---
function renderSubtopic(main) {
  const sub = findSubtopic(state.subtopicId);
  const content = CONTENT[state.subtopicId];
  const gradeNum = state.gradeKey.replace('grade', '');

  if (!content) {
    // Шаблон — съдържанието предстои
    main.innerHTML = `
      <div class="content-section">
        <div class="content-section-header">
          <span class="sec-icon">📖</span>
          <span class="sec-title">Съдържанието се подготвя</span>
        </div>
        <div class="content-section-body">
          <p>Подтемата <strong>${sub ? sub.title : ''}</strong> ще бъде попълнена скоро.</p>
          <p style="margin-top:10px;color:var(--text-muted);font-size:13px;">Използвай бутона Назад, за да се върнеш към списъка с подтеми.</p>
        </div>
      </div>
    `;
    return;
  }

  let html = `<div class="subtopic-content">`;

  // Накратко
  if (content.shortIntro) {
    html += makeSection('💡', 'Накратко', `<p>${content.shortIntro}</p>`);
  }

  // Основни понятия
  if (content.definitions && content.definitions.length) {
    let defs = content.definitions.map(d =>
      `<div class="definition-box"><strong>${d.term}:</strong> ${d.def}</div>`
    ).join('');
    html += makeSection('📚', 'Основни понятия', defs);
  }

  // Формули
  if (content.formulas && content.formulas.length) {
    let fms = content.formulas.map(f => `
      <div style="margin-bottom:10px;">
        <div style="font-size:12px;color:var(--text-muted);margin-bottom:4px;">${f.label}</div>
        <div class="formula-box" style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
          <span><katex-display>${f.tex}</katex-display></span>
          <button class="copy-btn" onclick="copyFormula(this, '${escapeSingleQuotes(f.tex)}')">📋 Копирай</button>
        </div>
      </div>
    `).join('');
    html += makeSection('📐', 'Формули, свойства и теореми', fms);
  }

  // Таблица дискриминанта
  if (content.discriminantTable) {
    html += makeSection('📊', 'Дискриминанта и брой корени', makeDiscriminantTable());
  }

  // Таблица за тригонометрия
  if (content.trigTable) {
    html += makeSection('📊', 'Таблица на тригонометричните стойности', makeTrigTable());
  }

  // Алгоритъм
  if (content.algorithm && content.algorithm.length) {
    let steps = '<ol class="algorithm-steps">' +
      content.algorithm.map(s => `<li>${s}</li>`).join('') +
      '</ol>';
    html += makeSection('🔢', 'Алгоритъм', steps);
  }

  // Типова задача
  if (content.example) {
    let body = `
      <div class="example-wrap">
        <div class="example-problem">📝 <strong>Задача:</strong> ${content.example.problem}</div>
        <button class="toggle-solution-btn" onclick="toggleSolution(this)">👁 Покажи решение</button>
        <div class="solution-body">${content.example.solution}</div>
      </div>
    `;
    html += makeSection('✏️', 'Типова задача', body);
  }

  // Чести грешки
  if (content.mistakes && content.mistakes.length) {
    let mistakes = content.mistakes.map(m => `
      <div class="mistake-box">
        <div class="mistake-label">⚠ ${m.label}</div>
        <div>${m.text}</div>
      </div>
    `).join('');
    html += makeSection('❌', 'Чести грешки', mistakes);
  }

  // Мини проверка
  if (content.miniCheck && content.miniCheck.length) {
    let qhtml = '<div class="minicheck-wrap">';
    content.miniCheck.forEach((q, qi) => {
      qhtml += `
        <div class="minicheck-question">
          <div class="minicheck-q">${q.q}</div>
          <div class="minicheck-options">
            ${q.options.map((opt, oi) => `
              <button class="minicheck-option" onclick="checkAnswer(this, ${qi}, ${oi}, ${q.correct}, '${escapeSingleQuotes(q.feedback)}')">
                ${opt}
              </button>
            `).join('')}
          </div>
          <div class="minicheck-feedback" id="mc-fb-${qi}"></div>
        </div>
      `;
    });
    qhtml += '</div>';
    html += makeSection('✅', 'Мини проверка', qhtml);
  }

  // Запомнете
  if (content.remember) {
    html += `
      <div class="remember-box">
        <div class="remember-label">⭐ Запомнете!</div>
        <div>${content.remember}</div>
      </div>
    `;
  }

  html += `</div>`;
  main.innerHTML = html;
}

// --- Любими ---
function renderFavorites(main) {
  const favs = getFavorites();

  if (favs.length === 0) {
    main.innerHTML = `
      <div class="favorites-empty">
        <div class="empty-icon">⭐</div>
        <div>Все още нямаш любими подтеми.</div>
        <div style="font-size:13px;margin-top:8px;">Натисни ⭐ в дадена подтема, за да я запазиш тук.</div>
      </div>
    `;
    return;
  }

  let html = `<div class="section-title">Любими подтеми</div><div class="subtopic-list">`;
  favs.forEach(subtopicId => {
    const info = findSubtopicInfo(subtopicId);
    if (!info) return;
    html += `
      <div class="subtopic-item" onclick="goToSubtopicById('${subtopicId}')">
        <span class="grade-badge grade-badge-${info.gradeNum}">${info.gradeLabel}</span>
        <div class="subtopic-name" style="flex:1;">${info.subtopic.title}</div>
        <div style="color:var(--text-muted);font-size:16px;">›</div>
      </div>
    `;
  });
  html += `</div>`;
  main.innerHTML = html;
}

// ============================================================
// 7. ПОМОЩНИ ФУНКЦИИ ЗА РЕНДИРАНЕ
// ============================================================

function makeSection(icon, title, bodyHtml, collapsed = false) {
  return `
    <div class="content-section ${collapsed ? 'collapsed' : ''}">
      <div class="content-section-header" onclick="toggleSection(this.parentElement)">
        <span class="sec-icon">${icon}</span>
        <span class="sec-title">${title}</span>
        <span class="sec-toggle">˅</span>
      </div>
      <div class="content-section-body">${bodyHtml}</div>
    </div>
  `;
}

function makeDiscriminantTable() {
  return `
    <table class="data-table">
      <thead>
        <tr>
          <th>Условие</th>
          <th>Брой корени</th>
          <th>Формула</th>
          <th>Интерпретация</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><katex>D > 0</katex></td>
          <td>Два различни реални корена</td>
          <td><katex>x_{1,2} = \\dfrac{-b \\pm \\sqrt{D}}{2a}</katex></td>
          <td>Параболата пресича Ox в 2 точки</td>
        </tr>
        <tr>
          <td><katex>D = 0</katex></td>
          <td>Два равни корена (двоен)</td>
          <td><katex>x_1 = x_2 = \\dfrac{-b}{2a}</katex></td>
          <td>Параболата докосва Ox в 1 точка</td>
        </tr>
        <tr>
          <td><katex>D < 0</katex></td>
          <td>Няма реални корени</td>
          <td>—</td>
          <td>Параболата не пресича Ox</td>
        </tr>
      </tbody>
    </table>
  `;
}

function makeTrigTable() {
  return `
    <table class="data-table">
      <thead>
        <tr><th>Ъгъл</th><th>sin</th><th>cos</th><th>tg</th><th>cotg</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><katex>30°</katex></td>
          <td><katex>\\dfrac{1}{2}</katex></td>
          <td><katex>\\dfrac{\\sqrt{3}}{2}</katex></td>
          <td><katex>\\dfrac{\\sqrt{3}}{3}</katex></td>
          <td><katex>\\sqrt{3}</katex></td>
        </tr>
        <tr>
          <td><katex>45°</katex></td>
          <td><katex>\\dfrac{\\sqrt{2}}{2}</katex></td>
          <td><katex>\\dfrac{\\sqrt{2}}{2}</katex></td>
          <td><katex>1</katex></td>
          <td><katex>1</katex></td>
        </tr>
        <tr>
          <td><katex>60°</katex></td>
          <td><katex>\\dfrac{\\sqrt{3}}{2}</katex></td>
          <td><katex>\\dfrac{1}{2}</katex></td>
          <td><katex>\\sqrt{3}</katex></td>
          <td><katex>\\dfrac{\\sqrt{3}}{3}</katex></td>
        </tr>
      </tbody>
    </table>
  `;
}

// ============================================================
// 8. НАВИГАЦИОННИ ФУНКЦИИ
// ============================================================

function goHome() {
  state.view = 'home';
  state.gradeKey = null;
  state.topicId = null;
  state.subtopicId = null;
  renderApp();
  window.scrollTo(0, 0);
}

function goToGrade(gradeKey) {
  state.view = 'grade';
  state.gradeKey = gradeKey;
  state.topicId = null;
  state.subtopicId = null;
  renderApp();
  window.scrollTo(0, 0);
}

function goToTopic(topicId) {
  const info = findTopicInfo(topicId);
  if (info) state.gradeKey = info.gradeKey;
  state.view = 'topic';
  state.topicId = topicId;
  state.subtopicId = null;
  renderApp();
  window.scrollTo(0, 0);
}

function goToSubtopic(subtopicId) {
  state.view = 'subtopic';
  state.subtopicId = subtopicId;
  renderApp();
  // Обновяване на бутона за любими
  setTimeout(updateFavButton, 100);
  window.scrollTo(0, 0);
}

function goToSubtopicById(subtopicId) {
  const info = findSubtopicInfo(subtopicId);
  if (!info) return;
  state.gradeKey = info.gradeKey;
  state.topicId = info.topicId;
  goToSubtopic(subtopicId);
}

function goBack() {
  switch (state.view) {
    case 'subtopic':
      state.view = 'topic';
      state.subtopicId = null;
      break;
    case 'topic':
      state.view = 'grade';
      state.topicId = null;
      break;
    case 'grade':
    case 'favorites':
      state.view = 'home';
      state.gradeKey = null;
      break;
    default:
      state.view = 'home';
  }
  renderApp();
  window.scrollTo(0, 0);
}

function goFavorites() {
  state.view = 'favorites';
  renderApp();
  window.scrollTo(0, 0);
}

// ============================================================
// 9. ТЪРСЕНЕ
// ============================================================

function handleSearch(query) {
  const q = query.trim().toLowerCase();
  const clearBtn = document.getElementById('search-clear');
  const resultsWrap = document.getElementById('search-results');

  clearBtn && (clearBtn.className = q ? 'search-clear visible' : 'search-clear');

  if (!q) {
    if (resultsWrap) {
      resultsWrap.className = 'search-results';
      resultsWrap.innerHTML = '';
    }
    if (state.view === 'home') renderHome(document.getElementById('main-content'));
    return;
  }

  const hits = searchIndex.filter(item => item.searchText.includes(q)).slice(0, 12);

  if (!resultsWrap) return;

  if (hits.length === 0) {
    resultsWrap.className = 'search-results visible';
    resultsWrap.innerHTML = `<div style="padding:16px;color:var(--text-muted);text-align:center;">Няма намерени резултати за „${escapeHtml(query)}"</div>`;
    return;
  }

  resultsWrap.className = 'search-results visible';
  resultsWrap.innerHTML = hits.map(item => {
    const highlighted = highlight(item.subtopicTitle, query);
    return `
      <div class="search-result-item" onclick="goToSubtopicById('${item.subtopicId}')">
        <div class="result-path">${item.gradeLabel} › ${item.topicTitle}</div>
        <div class="result-title">${highlighted}</div>
      </div>
    `;
  }).join('');
}

function highlight(text, query) {
  const re = new RegExp('(' + escapeRegex(query) + ')', 'gi');
  return escapeHtml(text).replace(re, '<mark>$1</mark>');
}

function clearSearch() {
  const input = document.getElementById('search-input');
  if (input) {
    input.value = '';
    handleSearch('');
    input.focus();
  }
}

// ============================================================
// 10. ВЗАИМОДЕЙСТВИЯ
// ============================================================

function toggleSection(sectionEl) {
  sectionEl.classList.toggle('collapsed');
}

function toggleSolution(btn) {
  const sol = btn.nextElementSibling;
  const showing = sol.classList.toggle('visible');
  btn.textContent = showing ? '🙈 Скрий решение' : '👁 Покажи решение';
}

function checkAnswer(btn, qi, oi, correct, feedback) {
  const qWrap = btn.closest('.minicheck-question');
  const opts = qWrap.querySelectorAll('.minicheck-option');
  const fb = document.getElementById('mc-fb-' + qi);

  opts.forEach(o => { o.classList.remove('correct', 'wrong'); });

  if (oi === correct) {
    btn.classList.add('correct');
    if (fb) { fb.className = 'minicheck-feedback show ok'; fb.textContent = '✓ Правилно! ' + feedback; }
  } else {
    btn.classList.add('wrong');
    opts[correct].classList.add('correct');
    if (fb) { fb.className = 'minicheck-feedback show err'; fb.textContent = '✗ Грешно. ' + feedback; }
  }
}

function copyFormula(btn, tex) {
  navigator.clipboard.writeText(tex).then(() => {
    btn.textContent = '✓ Копирано';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = '📋 Копирай';
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    btn.textContent = '✗ Грешка';
    setTimeout(() => { btn.textContent = '📋 Копирай'; }, 2000);
  });
}

function toggleFav() {
  const added = toggleFavorite(state.subtopicId);
  updateFavButton();
  // Малка обратна връзка
  const btn = document.getElementById('fav-btn');
  if (btn) btn.title = added ? 'Премахни от любими' : 'Добави в любими';
}

function updateFavButton() {
  const btn = document.getElementById('fav-btn');
  if (!btn || !state.subtopicId) return;
  btn.className = isFavorite(state.subtopicId) ? 'icon-btn active' : 'icon-btn';
}

// ============================================================
// 11. ХЛЕБНИ ТРОХИ
// ============================================================

function updateBreadcrumb() {
  const bc = document.getElementById('breadcrumb');
  if (!bc) return;

  let parts = [`<a onclick="goHome()">🏠 Начало</a>`];

  if (state.view === 'favorites') {
    parts.push(`<span class="sep">›</span><span class="current">Любими</span>`);
  } else if (state.gradeKey) {
    const grade = HANDBOOK[state.gradeKey];
    parts.push(`<span class="sep">›</span><a onclick="goToGrade('${state.gradeKey}')">${grade.label}</a>`);

    if (state.topicId) {
      const topic = findTopic(state.topicId);
      if (topic) {
        parts.push(`<span class="sep">›</span><a onclick="goToTopic('${state.topicId}')">${topic.title}</a>`);
      }
    }

    if (state.subtopicId) {
      const sub = findSubtopic(state.subtopicId);
      if (sub) {
        parts.push(`<span class="sep">›</span><span class="current">${sub.title}</span>`);
      }
    }
  }

  bc.innerHTML = parts.join('');

  // Показване/скриване на бутони в хедъра
  const backBtn  = document.getElementById('back-btn');
  const favBtn   = document.getElementById('fav-btn');

  if (backBtn) backBtn.style.display = (state.view !== 'home') ? 'flex' : 'none';
  if (favBtn)  favBtn.style.display  = (state.view === 'subtopic') ? 'flex' : 'none';
}

// ============================================================
// 12. KATEX РЕНДИРАНЕ
// ============================================================

function renderKaTeX() {
  if (typeof katex === 'undefined') return;

  // Inline: <katex>...</katex>
  document.querySelectorAll('katex').forEach(el => {
    try {
      const rendered = katex.renderToString(el.textContent, {
        throwOnError: false,
        displayMode: false,
        macros: {
          '\\tg': '\\operatorname{tg}',
          '\\cotg': '\\operatorname{cotg}',
          '\\arctg': '\\operatorname{arctg}',
          '\\arccotg': '\\operatorname{arccotg}'
        }
      });
      const span = document.createElement('span');
      span.innerHTML = rendered;
      el.replaceWith(span);
    } catch (e) { /* пропускаме при грешка */ }
  });

  // Display: <katex-display>...</katex-display>
  document.querySelectorAll('katex-display').forEach(el => {
    try {
      const rendered = katex.renderToString(el.textContent, {
        throwOnError: false,
        displayMode: true,
        macros: {
          '\\tg': '\\operatorname{tg}',
          '\\cotg': '\\operatorname{cotg}'
        }
      });
      const div = document.createElement('div');
      div.innerHTML = rendered;
      el.replaceWith(div);
    } catch (e) {}
  });
}

// ============================================================
// 13. ПОМОЩНИ УТИЛИТИ
// ============================================================

function findTopic(topicId) {
  for (const gKey of Object.keys(HANDBOOK)) {
    const found = HANDBOOK[gKey].topics.find(t => t.id === topicId);
    if (found) return found;
  }
  return null;
}

function findTopicInfo(topicId) {
  for (const gKey of Object.keys(HANDBOOK)) {
    const topic = HANDBOOK[gKey].topics.find(t => t.id === topicId);
    if (topic) return { gradeKey: gKey, topic };
  }
  return null;
}

function findSubtopic(subtopicId) {
  for (const gKey of Object.keys(HANDBOOK)) {
    for (const topic of HANDBOOK[gKey].topics) {
      const sub = topic.subtopics.find(s => s.id === subtopicId);
      if (sub) return sub;
    }
  }
  return null;
}

function findSubtopicInfo(subtopicId) {
  for (const gKey of Object.keys(HANDBOOK)) {
    const grade = HANDBOOK[gKey];
    for (const topic of grade.topics) {
      const sub = topic.subtopics.find(s => s.id === subtopicId);
      if (sub) return {
        gradeKey: gKey,
        gradeLabel: grade.label,
        gradeNum: gKey.replace('grade', ''),
        topicId: topic.id,
        subtopic: sub
      };
    }
  }
  return null;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeSingleQuotes(str) {
  return String(str).replace(/'/g, "\\'");
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ============================================================
// 14. ТЕМА (светъл / тъмен режим)
// ============================================================

function initTheme() {
  const saved = localStorage.getItem('mathhandbook_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('mathhandbook_theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ============================================================
// 15. SERVICE WORKER РЕГИСТРАЦИЯ
// ============================================================

function registerSW() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').catch(() => {});
    });
  }
}

// ============================================================
// 16. ИНИЦИАЛИЗАЦИЯ
// ============================================================

// Скриптът е в края на <body>, DOM е вече готов — извикваме директно
function init() {
  initTheme();
  buildSearchIndex();
  registerSW();
  renderApp();

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => handleSearch(e.target.value));
  }
}

// Работи и ако DOM е готов, и ако не е (предпазна мрежа)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
