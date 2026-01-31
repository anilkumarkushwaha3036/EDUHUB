// Documentation database for main db object
const docsDb = [
    { 
        topic: "HTML", 
        category: "Web", 
        resources: [
            { type: "MDN", title: "HTML Reference", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", desc: "Complete HTML documentation from MDN" },
            { type: "W3Schools", title: "HTML Tutorial", link: "https://www.w3schools.com/html/", desc: "Interactive HTML tutorials" },
            { type: "Official", title: "HTML Spec", link: "https://html.spec.whatwg.org/", desc: "Official HTML specification" }
        ]
    },
    { 
        topic: "CSS", 
        category: "Web", 
        resources: [
            { type: "MDN", title: "CSS Reference", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", desc: "Complete CSS documentation from MDN" },
            { type: "W3Schools", title: "CSS Tutorial", link: "https://www.w3schools.com/css/", desc: "Interactive CSS tutorials" },
            { type: "CSS-Tricks", title: "CSS Guide", link: "https://css-tricks.com/", desc: "Modern CSS techniques and tips" }
        ]
    },
    { 
        topic: "JavaScript", 
        category: "Web", 
        resources: [
            { type: "MDN", title: "JavaScript Guide", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", desc: "Complete JavaScript documentation from MDN" },
            { type: "W3Schools", title: "JavaScript Tutorial", link: "https://www.w3schools.com/js/", desc: "Interactive JavaScript tutorials" },
            { type: "TC39", title: "ECMAScript Spec", link: "https://tc39.es/ecma262/", desc: "Official JavaScript specification" }
        ]
    },
    { 
        topic: "Python", 
        category: "Programming", 
        resources: [
            { type: "Official", title: "Python Docs", link: "https://docs.python.org/", desc: "Official Python documentation" },
            { type: "W3Schools", title: "Python Tutorial", link: "https://www.w3schools.com/python/", desc: "Interactive Python tutorials" },
            { type: "Real Python", title: "Python Articles", link: "https://realpython.com/", desc: "In-depth Python articles and tutorials" }
        ]
    },
    { 
        topic: "Java", 
        category: "Programming", 
        resources: [
            { type: "Oracle", title: "Java Docs", link: "https://docs.oracle.com/javase/", desc: "Official Java documentation" },
            { type: "W3Schools", title: "Java Tutorial", link: "https://www.w3schools.com/java/", desc: "Interactive Java tutorials" },
            { type: "Baeldung", title: "Java Guides", link: "https://www.baeldung.com/java", desc: "Comprehensive Java tutorials" }
        ]
    },
    { 
        topic: "C", 
        category: "Programming", 
        resources: [
            { type: "cppreference", title: "C Reference", link: "https://en.cppreference.com/w/c", desc: "Complete C documentation" },
            { type: "W3Schools", title: "C Tutorial", link: "https://www.w3schools.com/c/", desc: "Interactive C tutorials" },
            { type: "GNU", title: "C Library", link: "https://www.gnu.org/software/libc/", desc: "GNU C Library documentation" }
        ]
    },
    { 
        topic: "C++", 
        category: "Programming", 
        resources: [
            { type: "cppreference", title: "C++ Reference", link: "https://en.cppreference.com/w/cpp", desc: "Complete C++ documentation" },
            { type: "W3Schools", title: "C++ Tutorial", link: "https://www.w3schools.com/cpp/", desc: "Interactive C++ tutorials" },
            { type: "ISO", title: "C++ Standard", link: "https://isocpp.org/", desc: "Official C++ standard" }
        ]
    },
    { 
        topic: "Kotlin", 
        category: "Programming", 
        resources: [
            { type: "Official", title: "Kotlin Docs", link: "https://kotlinlang.org/docs/", desc: "Official Kotlin documentation" },
            { type: "Google", title: "Kotlin Guide", link: "https://developer.android.com/kotlin", desc: "Google's Kotlin development guide" },
            { type: "Baeldung", title: "Kotlin Tutorials", link: "https://www.baeldung.com/kotlin", desc: "In-depth Kotlin tutorials" }
        ]
    },
    { 
        topic: "Swift", 
        category: "Programming", 
        resources: [
            { type: "Apple", title: "Swift Docs", link: "https://developer.apple.com/swift/", desc: "Official Apple Swift documentation" },
            { type: "Official", title: "Swift.org", link: "https://www.swift.org/documentation/", desc: "Swift open source documentation" },
            { type: "Hacking with Swift", title: "Swift Tutorials", link: "https://www.hackingwithswift.com/", desc: "Comprehensive Swift tutorials" }
        ]
    },
    { 
        topic: "Go", 
        category: "Programming", 
        resources: [
            { type: "Official", title: "Go Docs", link: "https://golang.org/doc/", desc: "Official Go documentation" },
            { type: "Tour", title: "Go Tour", link: "https://tour.golang.org/", desc: "Interactive Go language tour" },
            { type: "Go by Example", title: "Examples", link: "https://gobyexample.com/", desc: "Go examples guide" }
        ]
    },
    { 
        topic: "Rust", 
        category: "Programming", 
        resources: [
            { type: "Official", title: "Rust Book", link: "https://doc.rust-lang.org/book/", desc: "Official Rust programming book" },
            { type: "Rust", title: "Std Library", link: "https://doc.rust-lang.org/std/", desc: "Rust standard library documentation" },
            { type: "Rustlings", title: "Interactive Exercises", link: "https://github.com/rust-lang/rustlings", desc: "Small exercises to learn Rust" }
        ]
    },
    { 
        topic: "PHP", 
        category: "Web", 
        resources: [
            { type: "Official", title: "PHP Manual", link: "https://www.php.net/manual/", desc: "Official PHP documentation" },
            { type: "W3Schools", title: "PHP Tutorial", link: "https://www.w3schools.com/php/", desc: "Interactive PHP tutorials" },
            { type: "Laravel", title: "Laravel Docs", link: "https://laravel.com/docs", desc: "Laravel framework documentation" }
        ]
    },
    { 
        topic: "Ruby", 
        category: "Programming", 
        resources: [
            { type: "Official", title: "Ruby Docs", link: "https://www.ruby-lang.org/en/documentation/", desc: "Official Ruby documentation" },
            { type: "Ruby on Rails", title: "Rails Guide", link: "https://guides.rubyonrails.org/", desc: "Rails framework guide" },
            { type: "W3Schools", title: "Ruby Tutorial", link: "https://www.w3schools.com/ruby/", desc: "Interactive Ruby tutorials" }
        ]
    },
    { 
        topic: "C#", 
        category: "Programming", 
        resources: [
            { type: "Microsoft", title: "C# Docs", link: "https://docs.microsoft.com/en-us/dotnet/csharp/", desc: "Official Microsoft C# documentation" },
            { type: "Dotnet", title: ".NET Guide", link: "https://docs.microsoft.com/en-us/dotnet/fundamentals/", desc: ".NET fundamentals guide" },
            { type: "W3Schools", title: "C# Tutorial", link: "https://www.w3schools.com/cs/", desc: "Interactive C# tutorials" }
        ]
    }
];

// Documentation resources data for tabs
const documentationData = {
    html: [
        { name: "MDN Web Docs - HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "W3Schools HTML", url: "https://www.w3schools.com/html/" },
        { name: "HTML Specification", url: "https://html.spec.whatwg.org/" }
    ],
    css: [
        { name: "MDN Web Docs - CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "W3Schools CSS", url: "https://www.w3schools.com/css/" },
        { name: "CSS-Tricks", url: "https://css-tricks.com/" }
    ],
    javascript: [
        { name: "MDN Web Docs - JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "W3Schools JavaScript", url: "https://www.w3schools.com/js/" },
        { name: "ECMAScript Specification", url: "https://tc39.es/ecma262/" }
    ],
    typescript: [
        { name: "TypeScript Official", url: "https://www.typescriptlang.org/docs/" },
        { name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/" },
        { name: "TypeScript Deep Dive", url: "https://basarat.gitbook.io/typescript/" }
    ],
    c: [
        { name: "C Standard Library - cppreference", url: "https://en.cppreference.com/w/c" },
        { name: "W3Schools C", url: "https://www.w3schools.com/c/" },
        { name: "GNU C Library", url: "https://www.gnu.org/software/libc/" }
    ],
    cpp: [
        { name: "C++ Reference - cppreference", url: "https://en.cppreference.com/w/cpp" },
        { name: "C++ Standard Library", url: "https://isocpp.org/" },
        { name: "W3Schools C++", url: "https://www.w3schools.com/cpp/" }
    ],
    python: [
        { name: "Python Official Docs", url: "https://docs.python.org/" },
        { name: "W3Schools Python", url: "https://www.w3schools.com/python/" },
        { name: "Real Python", url: "https://realpython.com/" }
    ],
    java: [
        { name: "Oracle Java Documentation", url: "https://docs.oracle.com/javase/" },
        { name: "W3Schools Java", url: "https://www.w3schools.com/java/" },
        { name: "Baeldung Java", url: "https://www.baeldung.com/java" }
    ],
    kotlin: [
        { name: "Kotlin Official Docs", url: "https://kotlinlang.org/docs/" },
        { name: "Google Kotlin Guide", url: "https://developer.android.com/kotlin" },
        { name: "Baeldung Kotlin", url: "https://www.baeldung.com/kotlin" }
    ],
    swift: [
        { name: "Apple Swift Docs", url: "https://developer.apple.com/swift/" },
        { name: "Swift.org Official", url: "https://www.swift.org/documentation/" },
        { name: "Hacking with Swift", url: "https://www.hackingwithswift.com/" }
    ],
    go: [
        { name: "Go Official Docs", url: "https://golang.org/doc/" },
        { name: "Go Tour", url: "https://tour.golang.org/" },
        { name: "Go by Example", url: "https://gobyexample.com/" }
    ],
    rust: [
        { name: "The Rust Book", url: "https://doc.rust-lang.org/book/" },
        { name: "Rust Std Library", url: "https://doc.rust-lang.org/std/" },
        { name: "Rustlings Exercises", url: "https://github.com/rust-lang/rustlings" }
    ],
    php: [
        { name: "PHP Official Manual", url: "https://www.php.net/manual/" },
        { name: "W3Schools PHP", url: "https://www.w3schools.com/php/" },
        { name: "Laravel Documentation", url: "https://laravel.com/docs" }
    ],
    ruby: [
        { name: "Ruby Official Docs", url: "https://www.ruby-lang.org/en/documentation/" },
        { name: "Ruby on Rails Guide", url: "https://guides.rubyonrails.org/" },
        { name: "W3Schools Ruby", url: "https://www.w3schools.com/ruby/" }
    ],
    csharp: [
        { name: "Microsoft C# Docs", url: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
        { name: ".NET Fundamentals", url: "https://docs.microsoft.com/en-us/dotnet/fundamentals/" },
        { name: "W3Schools C#", url: "https://www.w3schools.com/cs/" }
    ]
};