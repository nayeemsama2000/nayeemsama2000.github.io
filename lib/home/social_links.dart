import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:nayeem_portfolio/theme/theme.dart';
import 'package:nayeem_portfolio/utils/LayoutConstraints.dart';
import 'package:nayeem_portfolio/utils/textParse.dart';
import 'package:url_launcher/url_launcher.dart';

class SocialLinksWidget extends StatelessWidget {
  final bool isLargeScreen;
  final double screenWidth;
  final bool isDarkMode;

  const SocialLinksWidget({
    super.key,
    required this.isLargeScreen,
    required this.screenWidth,
    required this.isDarkMode,
  });

  @override
  Widget build(BuildContext context) {


    final TextStyle textStyle = GoogleFonts.spaceMono(
      fontSize: Utils.socialTextSize(context),
      color: isDarkMode ? darkTextColor : lightTextColor,
    );

    final List<Map<String, String>> socialData = [
      {
        "icon": "assets/icon/github.png",
        "url": "https://github.com/nayeem-sama",
        "name": "github.com/nayeem-sama"
      },
      {
        "icon": "assets/icon/instagram.png",
        "url": "https://instagram.com/Its.nayeem_pr",
        "name": "instagram.com/Its.nayeem_pr"
      },
      {
        "icon": "assets/icon/linked.png",
        "url": "https://linkedin.com/in/nayeem-sama",
        "name": "linkedin.com/nayeem-sama"
      },
    ];

    final List<Widget> socialItems = socialData.map((data) {
      return _socialItem(
        data["icon"]!,
        Uri.parse(data["url"]!),
        data["name"]!,
        Utils.socialIconSize(context),
        textStyle,
      );
    }).toList();

    return isLargeScreen
        ? Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: socialItems
          .map((item) => Padding(
        padding: EdgeInsets.only(bottom: screenWidth * 0.01),
        child: item,
      ))
          .toList(),
    )
        : Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: socialItems
          .map((item) => Padding(
        padding: EdgeInsets.only(right: screenWidth * 0.05),
        child: item,
      ))
          .toList(),
    );
  }

  Widget _socialItem(String icon, Uri uri, String name, double iconSize, TextStyle textStyle) {
    return GestureDetector(
      onTap: () async {
        if (await canLaunchUrl(uri)) {
          await launchUrl(uri, mode: LaunchMode.platformDefault);
        } else {
          debugPrint("Could not launch $uri");
        }
      },
      child: Row(
        children: [
          ImageIcon(
            AssetImage(icon),
            size: iconSize,
            color: isDarkMode ? primaryColor : primaryColorLight,
          ),
          if (isLargeScreen) ...[
            SizedBox(width: iconSize * 0.5),
            SymbolHighlighter(
              text: name,
              style: textStyle,
              highlightColor: isDarkMode ? primaryColor : primaryColorLight,
            ),
          ],
        ],
      ),
    );
  }
}
