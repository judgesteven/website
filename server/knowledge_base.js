const fs = require('fs');
const path = require('path');

class KnowledgeBase {
  constructor() {
    this.documents = [];
    this.loadKnowledgeBase();
  }

  loadKnowledgeBase() {
    try {
      const kbPath = path.join(__dirname, '../data/gamelayer_knowledge_base.json');
      const kbData = JSON.parse(fs.readFileSync(kbPath, 'utf8'));
      this.documents = kbData.documents || [];
      console.log(`Loaded ${this.documents.length} documents from knowledge base`);
    } catch (error) {
      console.error('Error loading knowledge base:', error);
      this.documents = [];
    }
  }

  search(query, limit = 3) {
    if (!query || !query.trim()) {
      return [];
    }

    const searchTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 2);
    if (searchTerms.length === 0) {
      return [];
    }

    const scoredDocuments = this.documents.map(doc => {
      let score = 0;
      const content = `${doc.title} ${doc.content} ${doc.tags.join(' ')}`.toLowerCase();

      // Exact phrase match (highest priority)
      if (content.includes(query.toLowerCase())) {
        score += 100;
      }

      // Individual term matches
      searchTerms.forEach(term => {
        const termCount = (content.match(new RegExp(term, 'g')) || []).length;
        score += termCount * 10;

        // Title matches get bonus points
        if (doc.title.toLowerCase().includes(term)) {
          score += 20;
        }

        // Tag matches get bonus points
        if (doc.tags.some(tag => tag.toLowerCase().includes(term))) {
          score += 15;
        }

        // Category matches
        if (doc.category && doc.category.toLowerCase().includes(term)) {
          score += 10;
        }
      });

      // Relevance bonuses
      if (doc.category === 'api' && query.toLowerCase().includes('api')) {
        score += 25;
      }
      if (doc.category === 'gamelayer' && query.toLowerCase().includes('gamelayer')) {
        score += 25;
      }
      if (doc.category === 'concepts' && query.toLowerCase().includes('gamification')) {
        score += 20;
      }

      return { ...doc, score };
    });

    // Filter out documents with no matches and sort by score
    const relevantDocuments = scoredDocuments
      .filter(doc => doc.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    return relevantDocuments;
  }

  getDocumentById(id) {
    return this.documents.find(doc => doc.id === id);
  }

  getDocumentsByCategory(category) {
    return this.documents.filter(doc => doc.category === category);
  }

  getDocumentsByTag(tag) {
    return this.documents.filter(doc => 
      doc.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
    );
  }

  // Get API-specific information
  getAPIInfo() {
    return this.documents.filter(doc => doc.category === 'api');
  }

  // Get gamification concepts
  getGamificationConcepts() {
    return this.documents.filter(doc => doc.category === 'concepts');
  }

  // Get GameLayer-specific information
  getGameLayerInfo() {
    return this.documents.filter(doc => doc.category === 'gamelayer');
  }

  // Get best practices
  getBestPractices() {
    return this.documents.filter(doc => doc.category === 'practices');
  }

  // Search with context awareness
  searchWithContext(query, context = '') {
    const baseResults = this.search(query);
    
    if (!context) {
      return baseResults;
    }

    // Boost documents that match the context
    const contextualResults = baseResults.map(doc => {
      let contextScore = 0;
      const contextLower = context.toLowerCase();

      if (contextLower.includes('api') && doc.category === 'api') {
        contextScore += 30;
      }
      if (contextLower.includes('gamelayer') && doc.category === 'gamelayer') {
        contextScore += 30;
      }
      if (contextLower.includes('gamification') && doc.category === 'concepts') {
        contextScore += 25;
      }
      if (contextLower.includes('implementation') && doc.category === 'practices') {
        contextScore += 25;
      }

      return { ...doc, score: doc.score + contextScore };
    });

    return contextualResults.sort((a, b) => b.score - a.score);
  }

  // Get related documents
  getRelatedDocuments(documentId, limit = 3) {
    const doc = this.getDocumentById(documentId);
    if (!doc) return [];

    const related = this.documents
      .filter(d => d.id !== documentId)
      .map(d => {
        let score = 0;
        
        // Same category
        if (d.category === doc.category) score += 20;
        
        // Shared tags
        const sharedTags = doc.tags.filter(tag => d.tags.includes(tag));
        score += sharedTags.length * 10;
        
        // Content similarity (simple word overlap)
        const docWords = doc.content.toLowerCase().split(/\s+/);
        const otherWords = d.content.toLowerCase().split(/\s+/);
        const commonWords = docWords.filter(word => otherWords.includes(word));
        score += commonWords.length * 2;

        return { ...d, score };
      })
      .filter(d => d.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    return related;
  }

  // Get summary statistics
  getStats() {
    const stats = {
      total_documents: this.documents.length,
      categories: {},
      tags: {},
      recent_updates: this.documents.length // Simplified for now
    };

    this.documents.forEach(doc => {
      // Category stats
      stats.categories[doc.category] = (stats.categories[doc.category] || 0) + 1;
      
      // Tag stats
      doc.tags.forEach(tag => {
        stats.tags[tag] = (stats.tags[tag] || 0) + 1;
      });
    });

    return stats;
  }
}

module.exports = KnowledgeBase; 