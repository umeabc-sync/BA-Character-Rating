<template>
  <div class="character-card">
    <div class="card-header">
      蔚藍檔案 角色評分
    </div>
    
    <div class="card-content">
      <div class="left-section">
        <CharacterInfo 
          :id="character.id"
          :name="character.name"
          :nicknames="character.nicknames"
          :school="character.school" 
        />

        <div class="overall-rating-section">
          <div class="overall-score">{{ character.ratings.overall }}</div>
          <div class="overall-grade">{{ overallGrade }}</div>
        </div>

        <CharacterAttributes 
          :attack-type="character.attackType" 
          :defense-type="character.defenseType" 
          :weapon="character.weapon" 
          :position="character.position" 
          :unique-weapon-recommended="character.uniqueWeaponRecommended" 
          :acquisition-method="character.acquisitionMethod" 
        />
      </div>
      
      <div class="right-section">
        <EvaluationGrid :character-data="character" />
        
        <RatingSection title="星級評價">
          <div class="rating-row"><strong>新手期：</strong> <StarRating :rating="character.ratings.newbie" /></div>
          <div class="rating-row"><strong>總力戰：</strong> <StarRating :rating="character.ratings.totalAssault" /></div>
          <div class="rating-row"><strong>戰術對抗戰：</strong> <StarRating :rating="character.ratings.pvp" /></div>
          <div class="rating-row"><strong>大決戰：</strong> <StarRating :rating="character.ratings.grandAssault" /></div>
          <div class="rating-row"><strong>制約解除作戰：</strong> <StarRating :rating="character.ratings.limitBreakAssault" /></div>
          <div class="rating-row"><strong>演習考試：</strong> <StarRating :rating="character.ratings.jointFiringDrill" /></div>
          <div class="rating-row"><strong>活動高難：</strong> <StarRating :rating="character.ratings.eventChallenge" /></div>
        </RatingSection>

        <RatingSection :title="`技能簡述`">
          <p style="margin-top: 10px;">
            <span class="highlight">EX技能：</span>Cost使1名我方振動屬攻增加92.7%(32秒專二38秒)若目標有額外費用
          </p>
          <p style="margin-top: 8px;">
            增傷機制可減少2C(升至EX5)額外費用。如果只能追加1費，則只減少1費。
          </p>
          <p style="margin-top: 8px;">
            <span class="highlight">NS技能：</span>消耗三層「發車信號」使我方前排振動屬攻增加129%(25秒專二29.7秒)
          </p>
          <p style="margin-top: 8px;">
            (冷卻120秒) <span class="highlight">SS技能：</span>每次使用2次EX自身獲得「發車信號」並增加30.6%攻速
          </p>
        </RatingSection>
        
        <SkillsSection 
          :overall-recommendation="skills.overallRecommendation" 
          :skill-order="skills.skillOrder" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CharacterInfo from './CharacterInfo.vue';
import CharacterAttributes from './CharacterAttributes.vue';
import EvaluationGrid from './EvaluationGrid.vue';
import RatingSection from './RatingSection.vue';
import SkillsSection from './SkillsSection.vue';
import StarRating from './StarRating.vue';
import characterData from '../data/zh-tw.json';

const character = ref(characterData);

// 這部分暫時保留為硬編碼
const skills = ref({
  overallRecommendation: "振動大決戰必備人權，紫甲大決戰較力頻繁，未來可能有較高使用率。振動屬攻建議拿下",
  skillOrder: `
      <span class="highlight">EX3</span> → 技一二三Lv4 → <span class="highlight">EX5</span> → 技一Lv7 → 技二Lv7 → 技三Lv7<br>
      → 技一Lv10 → 技二Lv10 → 技三Lv10 → <span class="highlight">Max</span>
    `
});

const overallGrade = computed(() => {
  const score = character.value.ratings.overall;
  if (score > 100) return "SS";
  if (score >= 90) return "S";
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  if (score >= 40) return "E";
  if (score >= 20) return "F";
  return "N/A";
});
</script>

<style scoped>
.character-card {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  overflow: hidden;
}

.card-header {
  background: linear-gradient(45deg, #87CEEB, #6495ED);
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.card-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0;
}

.left-section {
  background: rgba(248, 249, 250, 0.7);
  padding: 20px;
  border-right: 3px solid #dee2e6;
}

.right-section {
  padding: 20px;
}

.overall-rating-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  text-align: center;
}

.overall-score {
  font-size: 3rem;
  font-weight: bold;
  color: #e74c3c;
}

.overall-grade {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(45deg, #87CEEB, #6495ED); /* BA Style Gradient */
  padding: 5px 15px;
  border-radius: 10px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.rating-row {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Dark Mode Overrides for RatingCard */
.dark-mode .character-card {
  background: rgba(26, 43, 64, 0.85); /* BA Dark Blue, semi-transparent */
  backdrop-filter: blur(10px);
  /* Use box-shadow to create a border effect without affecting layout, preventing layout shifts */
  box-shadow: 0 0 0 1px rgba(0, 174, 239, 0.3), 0 10px 30px rgba(0, 0, 0, 0.5);
}

.dark-mode .card-header {
  background: linear-gradient(45deg, #2a7fff, #00aeef); /* BA Blue Gradient */
}

.dark-mode .left-section {
  background: rgba(15, 25, 40, 0.7);
  border-right-color: #2a4a6e;
}

.dark-mode .character-name,
.dark-mode .character-nicknames,
.dark-mode .overall-score {
  color: #e0e6ed;
}

.dark-mode .school-badge {
  background: linear-gradient(45deg, #2a7fff, #00aeef);
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

.dark-mode .overall-grade {
  background: linear-gradient(45deg, #2a7fff, #00aeef);
}

/* General text color for dark mode within the card */
.dark-mode .right-section {
  color: #e0e6ed;
}

.dark-mode .rating-row strong {
  color: #c0c8d0; /* Slightly lighter for strong text */
}

.dark-mode p {
  color: #c0c8d0;
}



/* Style highlighting, because it is used in RatingSection and SkillsSection, so put it here */
.highlight {
  background: rgba(135, 206, 235, 0.3); /* Translucent light blue in BA style */
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: bold;
  color: #005a9c; /* The dark blue text increases readability */
}

.dark-mode .highlight {
  background: rgba(0, 174, 239, 0.2);
  color: #87ceeb;
}

@media (max-width: 768px) {
  .card-content {
    grid-template-columns: 1fr;
  }
  
  .left-section {
    border-right: none;
    border-bottom: 3px solid #dee2e6;
  }

  .dark-mode .left-section {
    border-bottom-color: #2a4a6e;
  }
  
  .card-header {
    font-size: 1.2rem;
    padding: 12px;
  }
}
</style>