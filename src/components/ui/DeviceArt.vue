<script setup lang="ts">
// Illustrative product renders used until real product photography is available.
defineProps<{ device: "meter" | "meter-solar" | "meter-next" | "plug" | "battery" }>();
</script>

<template>
  <!-- Smart prepaid meter -->
  <svg v-if="device === 'meter'" viewBox="0 0 200 260" class="h-full w-auto drop-shadow-xl" aria-hidden="true">
    <defs>
      <linearGradient id="meter-body" x1="0" x2="1">
        <stop offset="0" stop-color="#ffffff" />
        <stop offset="1" stop-color="#e4e8ee" />
      </linearGradient>
    </defs>
    <rect x="20" y="10" width="160" height="240" rx="14" fill="url(#meter-body)" stroke="#c9d1dc" />
    <rect x="20" y="190" width="160" height="60" rx="14" fill="#1f2b3b" />
    <rect x="20" y="190" width="160" height="14" fill="#1f2b3b" />
    <rect x="38" y="34" width="124" height="64" rx="6" fill="#0b1622" />
    <text x="150" y="76" text-anchor="end" font-family="Inter, sans-serif" font-size="26" font-weight="700" fill="#e67d3a">96.8</text>
    <text x="150" y="90" text-anchor="end" font-family="Inter, sans-serif" font-size="9" fill="#9aa6b6">kWh</text>
    <text x="48" y="50" font-family="Inter, sans-serif" font-size="7" fill="#4a5667">CREDIT</text>
    <circle cx="48" cy="118" r="4" fill="#22c55e" />
    <circle cx="62" cy="118" r="4" fill="#cd8c2a" />
    <text x="74" y="121" font-family="Inter, sans-serif" font-size="8" fill="#6b7889">LINK · PULSE</text>
    <text x="100" y="160" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="800" letter-spacing="1" fill="#13202e">ZIEONENERGY</text>
    <text x="100" y="173" text-anchor="middle" font-family="Inter, sans-serif" font-size="6" letter-spacing="2" fill="#cd8c2a">PREPAID METER</text>
    <g fill="#4a5667"><rect x="44" y="222" width="14" height="14" rx="2" /><rect x="72" y="222" width="14" height="14" rx="2" /><rect x="114" y="222" width="14" height="14" rx="2" /><rect x="142" y="222" width="14" height="14" rx="2" /></g>
  </svg>

  <!-- Solar prepaid meter -->
  <svg v-else-if="device === 'meter-solar'" viewBox="0 0 220 260" class="h-full w-auto drop-shadow-xl" aria-hidden="true">
    <g transform="translate(118 6)">
      <polygon points="10,0 96,0 86,52 0,52" fill="#13202e" />
      <g stroke="#4a5667" stroke-width="1.5">
        <line x1="31" y1="0" x2="23" y2="52" /><line x1="53" y1="0" x2="45" y2="52" /><line x1="75" y1="0" x2="66" y2="52" />
        <line x1="5" y1="17" x2="93" y2="17" /><line x1="3" y1="34" x2="89" y2="34" />
      </g>
      <rect x="44" y="52" width="4" height="22" fill="#9aa6b6" />
    </g>
    <rect x="10" y="60" width="140" height="196" rx="14" fill="#ffffff" stroke="#c9d1dc" />
    <rect x="10" y="210" width="140" height="46" rx="14" fill="#1f2b3b" />
    <rect x="10" y="210" width="140" height="12" fill="#1f2b3b" />
    <rect x="26" y="80" width="108" height="56" rx="6" fill="#0b1622" />
    <text x="36" y="94" font-family="Inter, sans-serif" font-size="7" fill="#4a5667">SOLAR CREDIT</text>
    <text x="124" y="122" text-anchor="end" font-family="Inter, sans-serif" font-size="22" font-weight="700" fill="#e0a548">42.5</text>
    <text x="124" y="132" text-anchor="end" font-family="Inter, sans-serif" font-size="8" fill="#9aa6b6">kWh</text>
    <circle cx="36" cy="152" r="4" fill="#22c55e" /><circle cx="50" cy="152" r="4" fill="#e0a548" />
    <text x="80" y="182" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="800" letter-spacing="1" fill="#13202e">ZIEONENERGY</text>
    <text x="80" y="195" text-anchor="middle" font-family="Inter, sans-serif" font-size="6" letter-spacing="2" fill="#d5651b">SOLAR PREPAID</text>
    <g fill="#4a5667"><rect x="32" y="232" width="12" height="12" rx="2" /><rect x="56" y="232" width="12" height="12" rx="2" /><rect x="92" y="232" width="12" height="12" rx="2" /><rect x="116" y="232" width="12" height="12" rx="2" /></g>
  </svg>

  <!-- Next-gen LoRaWAN meter -->
  <svg v-else-if="device === 'meter-next'" viewBox="0 0 200 260" class="h-full w-auto drop-shadow-xl" aria-hidden="true">
    <rect x="140" y="0" width="8" height="40" rx="4" fill="#334052" />
    <rect x="20" y="30" width="160" height="220" rx="16" fill="#13202e" />
    <rect x="36" y="50" width="128" height="80" rx="8" fill="#0b1622" stroke="#334052" />
    <path d="M50 110 L70 95 L88 102 L108 80 L128 88 L150 66" fill="none" stroke="#e67d3a" stroke-width="3" stroke-linecap="round" />
    <text x="50" y="68" font-family="Inter, sans-serif" font-size="8" fill="#9aa6b6">LIVE LOAD</text>
    <circle cx="100" cy="182" r="26" fill="none" stroke="#d5651b" stroke-width="3" />
    <path d="M90 182 a10 10 0 0 1 20 0 M84 182 a16 16 0 0 1 32 0" fill="none" stroke="#e0a548" stroke-width="2.5" stroke-linecap="round" />
    <circle cx="100" cy="184" r="3" fill="#e0a548" />
    <text x="100" y="232" text-anchor="middle" font-family="Inter, sans-serif" font-size="8" letter-spacing="2" fill="#9aa6b6">LoRaWAN</text>
  </svg>

  <!-- Smart plug -->
  <svg v-else-if="device === 'plug'" viewBox="0 0 200 220" class="h-full w-auto drop-shadow-xl" aria-hidden="true">
    <rect x="40" y="20" width="120" height="150" rx="22" fill="#ffffff" stroke="#c9d1dc" />
    <rect x="62" y="44" width="76" height="76" rx="38" fill="#f3f5f8" stroke="#e4e8ee" />
    <rect x="84" y="66" width="8" height="18" rx="3" fill="#4a5667" />
    <rect x="108" y="66" width="8" height="18" rx="3" fill="#4a5667" />
    <rect x="96" y="94" width="8" height="10" rx="3" fill="#4a5667" />
    <circle cx="100" cy="146" r="6" fill="#d5651b" />
    <rect x="74" y="170" width="14" height="36" rx="3" fill="#9aa6b6" />
    <rect x="112" y="170" width="14" height="36" rx="3" fill="#9aa6b6" />
  </svg>

  <!-- Home battery -->
  <svg v-else viewBox="0 0 200 260" class="h-full w-auto drop-shadow-xl" aria-hidden="true">
    <rect x="40" y="10" width="120" height="240" rx="12" fill="#ffffff" stroke="#c9d1dc" />
    <rect x="40" y="10" width="120" height="30" rx="12" fill="#1f2b3b" />
    <rect x="40" y="28" width="120" height="12" fill="#1f2b3b" />
    <text x="100" y="30" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" font-weight="800" letter-spacing="2" fill="#ffffff">ZIEON</text>
    <g>
      <rect x="86" y="80" width="28" height="110" rx="4" fill="#e4e8ee" />
      <rect x="86" y="120" width="28" height="70" rx="4" fill="#22c55e" />
      <rect x="94" y="72" width="12" height="8" rx="2" fill="#c9d1dc" />
    </g>
    <text x="100" y="214" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#13202e">64%</text>
    <rect x="100" y="230" width="44" height="4" rx="2" fill="#d5651b" />
  </svg>
</template>
