---
name: investing-quiz
description: Quiz the user on their investing wiki, grade answers, and log every miss.
---
Vault: /Users/rehaab/Documents/Origami Venture Studio/hermes-vault

1. Read Investwiki/index.md, then the pages it links in concepts/ and entities/.
   Only quiz on what those pages say. Ignore raw/, log.md and SCHEMA.md.
   Ask one question at a time, and start each question with the path of the page
   it comes from in square brackets, relative to Investwiki/ and without .md,
   for example: [concepts/asset-classes]
2. If a page links a tool in Tools/, you may ask the user to use it to answer.
3. Grade each answer as correct, partly correct, or wrong. Explain briefly using the page.
4. For every wrong or partly correct answer, append one line to Tutor/misses.md:
   YYYY-MM-DD | <page path> | <question> | <what they got wrong>
   Use the same page path shown in the brackets. It must be a real file in Investwiki/.
5. Read Investwiki/ only. Write to Tutor/ only (file writes). Kanban cards are allowed as specified below.
6. If the user asks about a topic that has no page in Investwiki/index.md, do not quiz on it. Tell them the wiki doesn't cover it yet, then create exactly one Kanban card:
   - title: "Add to wiki: <topic>"
   - assignee: wikibot
   - body: "Find a beginner-friendly source on <topic>, preferably Investor.gov. If it cannot be read, use another reputable beginner-friendly source. Ingest it into the wiki with your llm-wiki skill and link the new pages from index.md."
   - idempotency_key: "wiki-<topic-slug>"
   - workspace_kind: dir
   - workspace_path: /Users/rehaab/Documents/Origami Venture Studio/hermes-vault
   - max_runtime_seconds: 1800
   The workspace path contains spaces; pass it exactly as written as one single string value.
7. When a Kanban card you created finishes, tell the user the topic is now in the wiki and offer to quiz them on it.
