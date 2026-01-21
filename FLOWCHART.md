# dmd-grunt-jsdoc2md Pipeline Übersicht

```mermaid
flowchart TD
    A["Source JS Files (src/**/*.js)"] -->|jsdoc2md per Grunt| B["Markdown per Source File"]
    B -->|Aggregation| C["dmd-grunt-jsdoc2md"]
    C -->|Apply Helpers & Partials| D["Global API Index (api.md)"]
    
    subgraph "Helpers"
        H1[equals]
        H2[sort]
    end
    subgraph "Partials"
        P1[api-member-index-list.hbs]
        P2[api-member-index-grouped.hbs]
        P3[api-module-index-dl.hbs]
        P4[api-module-index-table.hbs]
    end

    C --> H1
    C --> H2
    C --> P1
    C --> P2
    C --> P3
    C --> P4
```

## Beschreibung der Pipeline

1. Source JS Files
   - Alle Quellcodes im src/ Verzeichnis (src/**/*.js)
2. Grunt + jsdoc2md
   - Erzeugt pro Sourcefile ein Markdown-File
   - Optional: mehrere Formate, je nach Grunt-Konfiguration
3. dmd-grunt-jsdoc2md
   - Lädt partials/*.hbs und helpers/*.js
   - Aggregiert die JSdoc-Daten aller Markdown-Dateien
   - Rendert die globale Index-Datei (api.md)
4. Helpers
   - equals: Vergleich von Werten in Templates
   - sort: Sortieren von Arrays nach Property
5. Partials
   - api-member-index-*: Member-Level Index-Layouts
   - api-module-index-*: Modul-Level Index-Layouts (dl/table/grouped)
6. Output
   - Vollständig verlinktes API-Verzeichnis (api.md + Markdown pro Sourcefile)

---

**Merkmale dieser Darstellung:**

- Mermaid **flowchart** visualisiert den Datenfluss von JS → Markdown → Index.
- Helpers und Partials sind als Subgraphen hervorgehoben.
- Die einzelnen Schritte (Grunt, Aggregation, Rendering) werden klar sichtbar.
- Markdown kann direkt in Obsidian, GitHub oder VSCode zu einem Diagramm gerendert werden.
