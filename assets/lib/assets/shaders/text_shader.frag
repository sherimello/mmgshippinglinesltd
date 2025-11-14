// text_color_based_on_bg.frag

precision highp float;

uniform sampler2D uText;
uniform sampler2D uBackground;
uniform vec2 uResolution;

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  vec4 textColor = texture2D(uText, uv);
  vec4 bgColor = texture2D(uBackground, uv);

  float luminance = dot(bgColor.rgb, vec3(0.299, 0.587, 0.114));
  vec4 finalTextColor = luminance < 0.5 ? vec4(1.0) : vec4(0.0); // white or black

  gl_FragColor = textColor.a * finalTextColor;
}
