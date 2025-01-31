<script>
  import { artPieces } from "./art_pieces";

  let activePiece = null; // Keeps track of the currently selected art piece for the modal

  const openModal = (piece) => {
    activePiece = piece; // Set the active piece
  };

  const closeModal = () => {
    activePiece = null; // Clear the active piece
  };

  // Close modal when clicking outside the modal box
  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };
</script>

<div class="ml-5 p-6 pt-16">
  <h3 class="text-5xl md:text-5xl font-bold text-primary">
    My Art Portfolio: Culture's Ingenium
  </h3>
</div>

<div class="border-4 border-accent m-10 rounded-xl">
  <p class="p-8 ml-20 mr-20">
    The Culture's Ingenium portfolio is a reflection of the complexities of
    race, culture, and background in today's world. It is a dialogue — one that
    explores the power and beauty of diversity, inclusion, and intersectionality
    through art. At its core, Culture's Ingenium is dedicated to raising
    awareness and inspiring change in how we perceive and approach cultural
    identities. <br /> <br />
    Through my art, I aim to challenge the traditional "siloing" of cultures and
    ethnic groups often perpetuated by societal norms. Each piece in the collection
    focuses on a specific cultural heritage month, acknowledging different racial
    and cultural identities. However, the final piece — a portrayal of myself — serves
    as a powerful visual representation of the idea that we, as people, are not confined
    to singular identities or backgrounds. With Vietnamese, European, and Jewish
    roots, I am a living embodiment of the fusion of cultures. <br /> <br />
    By using a distinctive block art style, where colors are intentionally kept separate
    and chunky, I create a visual language that encourages us to see the beauty in
    both the individual pieces of who we are and the greater whole they form. The
    use of shapes and thick "lines" reflects how I process my mixed identity — sketching
    out the outlines and then breaking them down into structured pieces that still
    come together to form a cohesive narrative.
  </p>
</div>

<!-- Grid of Cards -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
  {#each artPieces as piece}
    <div
      class="card border-4 border-accent shadow-xl cursor-pointer hover:bg-base-200"
      on:click={() => openModal(piece)}
    >
      <figure>
        <img
          src={piece.image}
          alt={piece.title}
          class="object-cover h-48 w-full"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-secondary">{piece.title}</h2>
        <p>{piece.description}</p>
        <div class="card-actions justify-end">
          <button
            class="btn btn-primary text-white hover:bg-secondary"
            on:click|stopPropagation={() => openModal(piece)}>Learn More</button
          >
        </div>
      </div>
    </div>
  {/each}
</div>

<!-- Modal for Expanded View -->
{#if activePiece}
  <div
    class="modal modal-open modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    on:click={handleOutsideClick}
  >
    <div class="modal-box max-w-4xl relative bg-base-100 shadow-xl">
      <!-- Close Button Row -->
      <div class="flex justify-end mb-4">
        <button
          class="btn btn-square bg-primary text-base-100 hover:bg-accent"
          on:click={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Main Content -->
      <figure>
        <img
          src={activePiece.image}
          alt={activePiece.title}
          class="object-cover w-full rounded-md mb-4"
          loading="lazy"
        />
      </figure>
      <h2 class="text-3xl font-bold mb-4">{activePiece.title}</h2>
      <p>{activePiece.fullText}</p>
      <div class="modal-action">
        <button
          class="btn bg-primary text-base-100 hover:bg-primary-focus text-white"
          on:click={closeModal}>Close</button
        >
      </div>
    </div>
  </div>
{/if}
