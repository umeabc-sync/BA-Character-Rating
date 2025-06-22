<template>
  <div class="character-card">
    <div class="card-header">
      蔚藍檔案 角色評分
    </div>
    
    <div class="card-content">
      <div class="left-section">
        <CharacterInfo 
          :name="character.name" 
          :school="character.school" 
        />

        <!-- TODO 把綜合泛用推薦分數移到這裡，並且透過分數自動判斷評級 -->
        
        <CharacterAttributes 
          :attack-type="character.attackType" 
          :defense-type="character.defenseType" 
          :weapon="character.weapon" 
          :position="character.position" 
        />
      </div>
      
      <div class="right-section">
        <EvaluationGrid :ratings="character.ratings" />
        
        <RatingSection title="星級評價">
          <div style="margin-bottom: 8px;"><strong>新手期：</strong> <span class="stars"> 不適合</span></div>
          <div style="margin-bottom: 8px;"><strong>總力戰：</strong> <span class="stars">★★★★</span></div>
          <div style="margin-bottom: 8px;"><strong>戰術對抗戰：</strong> 不適合</div>
          <div style="margin-bottom: 8px;"><strong>大決戰：</strong> <span class="stars">★★★★★</span></div>
          <div style="margin-bottom: 8px;"><strong>制約解除作戰：</strong> <span class="stars">★★★★☆</span></div>
          <div style="margin-bottom: 8px;"><strong>演習考試：</strong> <span class="stars">★★★★</span></div>
          <div><strong>活動高難：</strong> <span class="stars">★★★★★</span></div>
        </RatingSection>
        
        <RatingSection title="角評 7.0">  <!-- TODO 移動到左欄，title改名為「技能簡述」 -->
          <p><strong>專武推薦度：</strong> 看情況開</p> <!-- TODO 移動到左欄 -->
          <p><strong>入手方式：</strong> 限定池</p> <!-- TODO 移動到左欄 -->
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
          :overall-recommendation="character.skills.overallRecommendation" 
          :skill-order="character.skills.skillOrder" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CharacterInfo from './CharacterInfo.vue';
import CharacterAttributes from './CharacterAttributes.vue';
import EvaluationGrid from './EvaluationGrid.vue';
import RatingSection from './RatingSection.vue';
import SkillsSection from './SkillsSection.vue';

const character = ref({
  name: "橘 光",
  nicknames: ["光"],
  school: "高地人",
  attackType: "振動屬",
  defenseType: "輕裝甲",
  weapon: "HG手槍",
  position: "前排(輔助坦)",
  uniqueWeaponRecommended: "看情況開",
  acquisitionMethod: "限定池",
  skillMainOparts: "",
  skillSubOparts: "",
  l2dUnlock: 6,
  city: "D",
  outdoor: "B",
  indoor: "S",
  equipments: [
    "Gloves",
    "Hairpin",
    "Amulet"
  ],
  uniqueWeaponStar2: "增益持續增加",
  uniqueWeaponStar3: ["indoor", "SS"],
  ratingVersion: "7.0",
  ratings: {
    "newbie": null,
    "totalAssault": 4,
    "pvp": null,
    "grandAssault": 6,
    "limitBreakAssault": 6,
    "jointFiringDrill": 4,
    "eventChallenge": 5,
    "overall": 81
  },
  skills: {
    overallRecommendation: "振動大決戰必備人權，紫甲大決戰較力頻繁，未來可能有較高使用率。振動屬攻建議拿下",
    skillOrder: `
      <span class="highlight">EX3</span> → 技一二三Lv4 → <span class="highlight">EX5</span> → 技一Lv7 → 技二Lv7 → 技三Lv7<br>
      → 技一Lv10 → 技二Lv10 → 技三Lv10 → <span class="highlight">Max</span>
    `
  }
});
</script>

<style scoped>
/* 應用於卡片結構的樣式 */
.character-card {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  overflow: hidden;
}

.card-header {
  background: linear-gradient(45deg, #4a90e2, #357abd);
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
  background: #f8f9fa;
  padding: 20px;
  border-right: 3px solid #dee2e6;
}

.right-section {
  padding: 20px;
}

/* 樣式高亮，因為在 RatingSection 和 SkillsSection 中使用，所以放在這裡 */
.highlight {
  background: #fff3cd;
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .card-content {
    grid-template-columns: 1fr;
  }
  
  .left-section {
    border-right: none;
    border-bottom: 3px solid #dee2e6;
  }
  
  .card-header {
    font-size: 1.2rem;
    padding: 12px;
  }
}
</style>