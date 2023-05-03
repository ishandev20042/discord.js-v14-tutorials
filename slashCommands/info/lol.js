const {
  Client,
  CommandInteraction,
  ApplicationCommandType,
  ApplicationCommandOptionType,
} = require("discord.js");

module.exports = {
  name: "lol",
  description: "lollllllllllllllllllllllllllll",
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: "lol",
      description: "lol x2",
      type: ApplicationCommandOptionType.Number,
      required: true,
    },
  ],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const win = interaction.options.getNumber("lol");
    interaction.followUp({ content: `${win}`, ephemeral: true });
  },
};
