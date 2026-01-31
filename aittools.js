// --- AI Tools Database ---
const toolsDb = [
    {
        topic: "GitHub Copilot",
        category: "(Coding)",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJedbIq_sak5t6NzY9sVyvYUDV8haKtqd3g&s",
        resources: [
            { type: "Link", title: "Visit GitHub Copilot", link: "https://github.com/features/copilot", desc: "Your AI pair programmer. Helps you write code faster with suggestions and completions right in your editor." }
        ]
    },
    {
        topic: "Cursor",
        category: "(Coding)",
        logo: "https://img.icons8.com/color/512/cursor-ai.png",
        resources: [
            { type: "Link", title: "Visit Cursor", link: "https://cursor.sh/", desc: "An AI-first code editor designed for pair-programming with AI." }
        ]
    },
    {
        topic: "ChatGPT",
        category: "(Chatbot)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        resources: [
            { type: "Link", title: "Visit ChatGPT", link: "https://chat.openai.com/", desc: "A conversational AI model by OpenAI, capable of a wide range of text-based tasks." }
        ]
    },
    {
        topic: "Claude",
        category: "(Chatbot)",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbFgG74ZtO3YsOgSVmSN7WQ1zaxbypVYL8A&s",
        resources: [
            { type: "Link", title: "Visit Claude", link: "https://claude.ai/", desc: "A family of large language models developed by Anthropic." }
        ]
    },
    {
        topic: "Google Gemini",
        category: "(Chatbot)",
        logo: "https://static.vecteezy.com/system/resources/previews/055/687/065/non_2x/gemini-google-icon-symbol-logo-free-png.png",
        resources: [
            { type: "Link", title: "Visit Google Gemini", link: "https://gemini.google.com/", desc: "Google's multimodal large language model." }
        ]
    },
    {
        topic: "Microsoft Copilot",
        category: "(Chatbot)",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrLpEY4Oz4-7gvNgKH2ej68nkHaFsxgSYvA&s",
        resources: [
            { type: "Link", title: "Visit Microsoft Copilot", link: "https://copilot.microsoft.com/", desc: "An AI-powered chatbot by Microsoft, integrated into various Microsoft products." }
        ]
    },
    {
        topic: "Perplexity",
        category: "(Chatbot)",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8snhZ4ow-zXwz21VUACHOowDEHR7VdlZZRQ&s",
        resources: [
            { type: "Link", title: "Visit Perplexity", link: "https://www.perplexity.ai/", desc: "An AI-powered conversational search engine that provides answers with citations." }
        ]
    },
    {
        topic: "Grok",
        category: "(Chatbot)",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSiNUDO__fZluGrW2RLCYxy-eYxtfgRPpfQ&s",
        resources: [
            { type: "Link", title: "Visit Grok", link: "https://grok.x.ai/", desc: "A conversational AI chatbot developed by xAI, integrated with X (formerly Twitter)." }
        ]
    },
    {
        topic: "Meta AI",
        category: "(Chatbot)",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRto3QKV843ez9yprzuJxVEbWG7hILPvWqFA&s",
        resources: [
            { type: "Link", title: "Visit Meta AI", link: "https://www.meta.ai/", desc: "An AI assistant by Meta, integrated across its platforms like WhatsApp and Instagram." }
        ]
    },
    {
        topic: "Mistral",
        category: "(Chatbot)",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFIUcYfQTyqy1S7FUjwnUMDXJtpda3n_waMA&s",
        resources: [
            { type: "Link", title: "Visit Mistral", link: "https://mistral.ai/", desc: "An open-source focused AI company known for its high-performance language models." }
        ]
    },
    {
        topic: "DeepSeek",
        category: "(Chatbot)",
        logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek-color.png",
        resources: [
            { type: "Link", title: "Visit DeepSeek", link: "https://www.deepseek.com/", desc: "An AI research lab focused on developing powerful open-source language models." }
        ]
    },
    {
        topic: "Notion AI",
        category: "(Writing)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
        resources: [
            { type: "Link", title: "Visit Notion AI", link: "https://www.notion.so/product/ai", desc: "A powerful writing assistant integrated into your Notion workspace for summarizing, brainstorming, and drafting text." }
        ]
    },
    {
        topic: "Jasper AI",
        category: "(Writing)",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxsPTAAFvhlyt9Bu7wpdC2yyftvVe7S06vA&s",
        resources: [
            { type: "Link", title: "Visit Jasper AI", link: "https://www.jasper.ai/", desc: "A popular AI content platform for creating marketing copy, blog posts, and more." }
        ]
    },
    {
        topic: "Grammarly AI",
        category: "(Writing)",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeT9PeDH9bDtJod2rZpDx16z-OJio8r9vKog&s",
        resources: [
            { type: "Link", title: "Visit Grammarly AI", link: "https://www.grammarly.com/ai", desc: "AI-powered writing assistance for grammar, spelling, style, and tone." }
        ]
    },
    {
        topic: "Codeium",
        category: "(Coding)",
        logo: "https://res.cloudinary.com/dokduyqpk/image/upload/v1761221884/Aiapps%20Logos/Codeium%20Logo.png",
        resources: [
            { type: "Link", title: "Visit Codeium", link: "https://codeium.com/", desc: "An AI-powered code completion and search tool, supporting over 70 languages." }
        ]
    },
    {
        topic: "Tabnine",
        category: "(Coding)",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLp2QaHTGsZwYf12cT_BFA-WSwcfNAOr3kw&s",
        resources: [
            { type: "Link", title: "Visit Tabnine", link: "https://www.tabnine.com/", desc: "The AI code completion assistant that helps you write code faster." }
        ]
    },
    {
        topic: "Replit AI",
        category: "(Coding)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_Replit_Logo.svg/1200px-New_Replit_Logo.svg.png",
        resources: [
            { type: "Link", title: "Visit Replit AI", link: "https://replit.com/ai", desc: "AI-powered features within the Replit online IDE, including code completion and generation." }
        ]
    },
    {
        topic: "Midjourney",
        category: "(Design)",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/06/Midjourney_logo.svg",
        resources: [
            { type: "Link", title: "Visit Midjourney", link: "https://www.midjourney.com/", desc: "An independent research lab that produces an AI program that creates images from textual descriptions." }
        ]
    }
];