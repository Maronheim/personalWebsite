<script>
    // Define the links to the PDF report and the external personality link
    const reportLink = "/public/Aronheim, Max - Behavioral Report.pdf"; // Behavioral report PDF link
    const personalityLink = "https://www.16personalities.com/enfj-personality"; // Personality link
</script>

<div class="bg-base-200">
    <h1 class="text-4xl font-bold text-center mt-10 mb-6">
        Personality Insights
    </h1>

    <div class="flex justify-between items-center w-full mt-10 mb-10">
        <!-- Left Image with Button and Link (PI Icon) -->
        <div class="w-1/4 overflow-hidden ml-64 text-center">
            <a href={reportLink} target="_blank">
                <img
                    src="/images/PI-icon.png"
                    alt="Personality Icon"
                    class="object-contain w-full h-auto rounded-lg"
                />
            </a>
            <div class="mt-4">
                <a href={reportLink} target="_blank" class="btn btn-primary">
                    View Personality Report
                </a>
            </div>
        </div>

        <!-- Right Image with Button and Link (Myers Image) -->
        <div class="w-1/4 overflow-hidden mr-64 text-center">
            <a href={personalityLink} target="_blank">
                <img
                    src="/images/myers.png"
                    alt="Myers-Briggs Personality Test"
                    class="object-contain w-full h-auto rounded-lg"
                />
            </a>
            <div class="mt-4">
                <a
                    href={personalityLink}
                    target="_blank"
                    class="btn btn-primary"
                >
                    View Personality Report
                </a>
            </div>
        </div>
    </div>
</div>
