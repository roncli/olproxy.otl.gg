//    #                  #        #                  #   #    #
//   # #                 #                           #   #
//  #   #  # ##    ###   # ##    ##    #   #   ###   #   #   ##     ###   #   #
//  #   #  ##  #  #   #  ##  #    #    #   #  #   #   # #     #    #   #  #   #
//  #####  #      #      #   #    #     # #   #####   # #     #    #####  # # #
//  #   #  #      #   #  #   #    #     # #   #       # #     #    #      # # #
//  #   #  #       ###   #   #   ###     #     ###     #     ###    ###    # #
/**
 * A class that represents the archive view.
 */
class ArchiveView {
    //              #
    //              #
    //  ###   ##   ###
    // #  #  # ##   #
    //  ##   ##     #
    // #      ##     ##
    //  ###
    /**
     * Gets the rendered archive template.
     * @param {object} game The game to display.
     * @returns {string} An HTML string of the rendered archive template.
     */
    static get(game) {
        return /* html */`
            <div id="top">
                <div id="game">
                    ${ArchiveView.CompletedDetailsView.get(game, false)}
                </div>
                <div id="players">
                    ${ArchiveView.PlayersView.get(game)}
                </div>
            </div>
            <div id="damage">
                
            </div>
            <div id="events">
                ${ArchiveView.EventsView.get(game)}
            </div>
            <script>
                GameJs.game = new Game(${JSON.stringify(game)});
            </script>
        `;
    }
}

// @ts-ignore
ArchiveView.CompletedDetailsView = typeof CompletedDetailsView === "undefined" ? require("./common/completedDetails") : CompletedDetailsView; // eslint-disable-line no-undef
// @ts-ignore
ArchiveView.PlayersView = typeof PlayersView === "undefined" ? require("./common/players") : PlayersView; // eslint-disable-line no-undef
// @ts-ignore
ArchiveView.EventsView = typeof EventsView === "undefined" ? require("./common/events") : EventsView; // eslint-disable-line no-undef

if (typeof module !== "undefined") {
    module.exports = ArchiveView; // eslint-disable-line no-undef
}