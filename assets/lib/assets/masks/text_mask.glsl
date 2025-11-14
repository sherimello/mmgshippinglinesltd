// text_mask.glsl
// Run with flutter_shaders
precision highp float;

uniform sampler2D u_texture;
uniform sampler2D u_background;
uniform vec2 u_resolution;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec4 textColor = texture2D(u_texture, uv);
  vec4 bgColor = texture2D(u_background, uv);

  // Calculate brightness of the background
  float brightness = dot(bgColor.rgb, vec3(0.299, 0.587, 0.114));

  // If background is dark, use white, else black
  vec3 finalColor = brightness < 0.4 ? vec3(1.0) : vec3(0.0);

  gl_FragColor = vec4(finalColor, textColor.a);
}
