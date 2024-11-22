<template>
    <header>
    <nav class="flex items-center justify-between px-10 py-3 bg-[#06283a]">
      <img 
        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/800px-National_Football_League_logo.svg.png" 
        alt="Logo da NFL"
        class="w-12"
      >
      <ul class="flex gap-10">
        <li class="font-bold text-2xl text-white">
          <RouterLink to="/" active-class="active">Home</RouterLink> <!-- Link para a página Home -->
        </li>
        <li class="font-bold text-2xl text-white"> 
          <RouterLink to="/times" active-class="active">Times</RouterLink> <!-- Link para a página Times -->
        </li>
        <li class="font-bold text-2xl text-white">
          <RouterLink to="/games" active-class="active">Jogos</RouterLink> <!-- Link para a página Jogos -->
        </li>
      </ul>
    </nav>
  </header>
</template>