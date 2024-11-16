<template>
  <div class="person-card">
    <img
        :src="`${person.image?.original ?? '../../public/no-img.jpg'}`"
        :alt="person.name"
        class="person-img"
    />
    <div class="person-details">
      <div class="person-name">
        {{ person.name }}
        <span class="person-dates">
          ({{ person.birthday ?? 'No date' }}{{ person.deathday ? ` — ${person.deathday}` : '' }})
        </span>
      </div>
      <div class="person-info">
        <span>{{ person.gender }}</span> |
        <a target="_blank" :href="`${person.url}`" class="person-link">View Profile</a> |
        <span>{{ person.country?.name ?? 'Unknown Country' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  person: {
    type: Object,
    required: true,
    default: () => ({}),
  }
});
</script>

<style scoped lang="css">
.person-card {
  display: flex;
  align-items: center;
  gap: 30px;
  background: linear-gradient(135deg, #1e1e1e, #2b2b2b);
  border: 1px solid #3a3a3a;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 25px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  transition: transform 0.4s, box-shadow 0.4s;
}

.person-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.8);
}

.person-img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #444;
  transition: transform 0.4s ease-in-out;
}

.person-card:hover .person-img {
  transform: scale(1.1);
}

.person-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #e5e5e5;
}

.person-name {
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.person-dates {
  font-size: 16px;
  color: #cfcfcf;
  margin-left: 8px;
}

.person-info {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 16px;
  color: #a5a5a5;
  align-items: center;
}

.person-link {
  color: #42a5f5;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.person-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #42a5f5, #64ffda);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}

.person-link:hover {
  color: #64ffda;
}

.person-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
